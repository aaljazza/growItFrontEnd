import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import UserStore from "./UserStore";
import { observer } from "mobx-react";

// Utils
import setAuthToken from "../../utils/setAuthToken";

// Stores

const instance = axios.create({
  baseURL: "http://178.128.205.28/"
});

class AuthsStore {
  constructor() {
    this.user = {};
    this.profile = "";
  }

  setCurrentUser(decoded) {
    this.user = decoded;
    this.fetchUserProfile(decoded.user_id);
    console.log(this.user);
  }

  get isAuthenticated() {
    return !!this.user;
  }

  logoutUser() {
    AsyncStorage.removeItem("jwtToken").then(
      () => {
        this.user = {};
        setAuthToken();
      },
      () => {
        console.log("something went wrong with logging out");
      }
    );
  }

  updateProfileInformation() {
    const userData = {
      phone_number: UserStore.phone_number,
      city: UserStore.city,
      block: UserStore.block,
      street: UserStore.street,
      avenue: UserStore.avenue,
      house_number: UserStore.house_number,
      apt_number: UserStore.apt_number,
      del_instructions: UserStore.del_instructions,
      user: this.user.user_id
    };
    if (this.profile === "Yes") {
      return instance
        .put(
          "/profiles/update/" + this.user.user_id + "/?format=json",
          userData
        )
        .then(res => res.data)
        .then(res => {
          console.log("Profile Updated");
        })
        .catch(err => console.log(err.response));
    } else {
      return instance
        .post("/profiles/create/?format=json", userData)
        .then(res => res.data)
        .then(res => {
          console.log("Profile Added");
          this.profile = "Yes";
        })
        .catch(err => console.log(err.response));
    }
  }

  fetchUserProfile(userID) {
    return instance
      .get("/profiles/detail/" + userID + "/?format=json")
      .then(res => res.data)
      .then(res => {
        this.profile = "Yes";
        UserStore.updateProfileInitial(res.phone_number + "", "phone_number");
        UserStore.updateProfileInitial(res.city + "", "city");
        UserStore.updateProfileInitial(res.block + "", "block");
        UserStore.updateProfileInitial(res.street + "", "street");
        UserStore.updateProfileInitial(res.avenue + "", "avenue");
        UserStore.updateProfileInitial(res.house_number + "", "house_number");
        UserStore.updateProfileInitial(res.apt_number + "", "apt_number");
        UserStore.updateProfileInitial(
          res.del_instructions,
          "del_instructions"
        );
      })
      .catch(err => {
        this.profile = "No";
        UserStore.resetProfile();
      });
  }

  loginUser(username, password, rememberMe) {
    const userData = {
      username: username,
      password: password
    };
    return instance
      .post("/login/?format=json", userData)
      .then(res => res.data)
      .then(user => {
        const { token } = user;
        // Save token to localStorage
        if (rememberMe || !rememberMe) {
          AsyncStorage.setItem("jwtToken", token).then(
            () => {
              // Set token to Auth header
              setAuthToken(token);
              // Decode token to get user data
              decoded = jwt_decode(token);
              // Set current user
              this.setCurrentUser(decoded);
            },
            () => console.log("something went wrong with setting jwt token")
          );
        }
      })
      .then(() => {
        UserStore.userSignedIn();
        console.log("logged In");
      })
      .catch(err =>
        alert(
          "Incorrect Account, try again or register if you do not have an account."
        )
      );
  }
  registerUser(username, password) {
    const userData = {
      username: username,
      password: password
    };
    instance
      .post("/api/register/", userData)
      .then(res => res.data)
      .then(user => {
        const { token } = user;
        // Save token to localStorage
        AsyncStorage.setItem("jwtToken", token).then(
          () => {
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            this.setCurrentUser(decoded);
          },
          () => console.log("something went wrong with setting jwt token")
        );
      })
      .then(() => console.log("success"))
      .catch(err => console.log(err.response));
  }

  checkForToken = () => {
    AsyncStorage.getItem("jwtToken")
      .then(token => {
        if (token !== null) {
          const currentTime = Date.now() / 1000;

          // Decode token and get user info
          const decoded = jwt_decode(token);

          // Check token expiration
          if (decoded.exp >= currentTime) {
            // Set auth token header
            setAuthToken(token);
            // Set user and isAuthenticated
            this.setCurrentUser(decoded);
          } else {
            this.logoutUser();
            // Redirect to login
          }
        }
      })
      .catch(err => console.error(err));
  };
}

decorate(AuthsStore, {
  user: observable,
  profile: observable,
  isAuthenticated: computed
});

const AuthStore = new AuthsStore();

export default observer(AuthStore);
