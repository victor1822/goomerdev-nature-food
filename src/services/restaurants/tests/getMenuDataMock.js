const dataMock = [
  {
    restaurantId: 1,
    name: 'Suco de laranja',
    image: 'https://fake-imgurl.com.br',
    price: 10.0,
    group: 'Bebidas',
    sales: [
      {
        description: 'Promo da hora',
        price: 4.0,
        hours: [
          {
            from: '8:00',
            to: '10:00',
            days: [1,2]
          }
        ]
      }
    ]
  }
]
export default dataMock