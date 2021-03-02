const AVATAR_URL = `https://i.pravatar.cc/74`;

export default [
  {
    bedrooms: 2,
    city: {
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    goods: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      name: `Angelina`,
      isPro: true,
    },
    id: 1,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    isFavorite: true,
    isPremium: true,
    maxAdults: 6,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 3,
    title: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    reviewsCount: 1,
  },
  {
    bedrooms: 1,
    city: {
      name: `London`
    },
    description: `An independent room, strategically located between Rembrand Square and National Opera`,
    goods: [
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      name: `Max`,
      isPro: true,
    },
    id: 2,
    images: [
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`
    ],
    isFavorite: true,
    isPremium: false,
    maxAdults: 2,
    previewImage: `img/apartment-02.jpg`,
    price: 60,
    rating: 4,
    title: `Beautiful & luxurious room at great location`,
    type: `room`,
    reviewsCount: 1,
  },
  {
    bedrooms: 2,
    city: {
      name: `London`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    goods: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      name: `Angelina`,
      isPro: true,
    },
    id: 3,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`
    ],
    isFavorite: true,
    isPremium: false,
    maxAdults: 8,
    previewImage: `img/apartment-01.jpg`,
    price: 320,
    rating: 2.8,
    title: `Beautiful & luxurious house at great location`,
    type: `house`,
    reviews: 1,
  },
  {
    bedrooms: 13,
    city: {
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    goods: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      name: `Angelina`,
      isPro: true,
    },
    id: 4,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`
    ],
    type: `hotel`,
    isFavorite: false,
    isPremium: true,
    maxAdults: 40,
    previewImage: `img/apartment-01.jpg`,
    price: 420,
    rating: 4.8,
    title: `Beautiful & luxurious hotel at great location`,
    reviewsCount: 1,
  }
];
