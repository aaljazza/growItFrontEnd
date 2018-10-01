var userdatabase = [
  {
    id: 1,
    name: "Abdulla Al-Jazzaf",
    email: "aaljazza@gmail.com",
    phone: 97666886,
    city: "",
    block: "",
    street: "",
    avenue: "",
    house: "",
    apartment: "",
    deliveryInstructions: "",
    orderHistory: [
      {
        orderId: 1,
        plantIds: [1, 3],
        quantities: [1, 2],
        date: "2018-09-16T17:48:54.523381Z",
        price: 30
      },
      {
        orderId: 2,
        plantIds: [2],
        quantities: [1],
        date: "2018-09-19T17:48:54.523381Z",
        price: 10
      },
      {
        orderId: 3,
        plantIds: [1],
        quantities: [2],
        date: "2018-09-21T17:48:54.523381Z",
        price: 20
      }
    ],
    plantingHistory: [
      { plantid: 1, plantedOn: "2018-07-11T17:48:54.523381Z", trackID: 1 },
      { plantid: 3, plantedOn: "2018-06-21T12:48:54.523381Z", trackID: 3 }
    ]
  }
];

export default userdatabase;
