import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Nezuko",
    lastName: "Kamado",
    username: "nezukokamado",
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Kh6YvZZ0MV-fiOWzjRgQWCQGJbZFM45RcA&usqp=CAU",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "I'm member of the Twelve Kizuki and a Blood Demon",
    email: "nezuko1234@gmail.com",
    website: "https://flashui.netlify.app/",
    password: "Nezuko@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Tnjiro",
        lastName: "Kamado",
        username: "tnjirokamado",
        profilePhoto:
          "https://i.pinimg.com/736x/89/b1/d4/89b1d419bf1e7a9d2df7fa55dec05d14.jpg",
      },
      {
        _id: uuid(),
        firstName: "Zenitsu ",
        lastName: "Agatsuma",
        username: "zenitsuagatsuma",
        profilePhoto:
          "https://cdn.myanimelist.net/images/characters/6/384253.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Tnjiro ",
        lastName: "Kamado",
        username: "tnjirokamado",
        profilePhoto:
          "https://i.pinimg.com/736x/89/b1/d4/89b1d419bf1e7a9d2df7fa55dec05d14.jpg",
      },
      {
        _id: uuid(),
        firstName: "Zenitsu ",
        lastName: "Agatsuma",
        username: "zenitsuagatsuma",
        profilePhoto:
          "https://cdn.myanimelist.net/images/characters/6/384253.jpg",
      },
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Tnjiro ",
    lastName: "Kamado",
    username: "tnjirokamado",
    profilePhoto:
      "https://i.pinimg.com/736x/89/b1/d4/89b1d419bf1e7a9d2df7fa55dec05d14.jpg",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "I'm member of the Twelve Kizuki and a Blood DemonIn order to soothe the spirits of those it killed, and to make sure it claims no further victims... I will swing my blade down and lop off the head of any demon without mercy! But... I will not belittle those who regret their actions and suffer over the things they did as demons. Because demons were once human. Because they were like me.",
    email: "tnjiroKamado2323@gmail.com",
    password: "Nezuko@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
      {
        _id: uuid(),
        firstName: "Giyu",
        lastName: " Tomioka",
        username: "giyutomioka",
        profilePhoto:
          "https://i.pinimg.com/564x/c4/82/bc/c482bcf110ad00beb1409205a00f22cc.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Zenitsu ",
    lastName: "Agatsuma",
    username: "zenitsuagatsuma",
    profilePhoto: "https://cdn.myanimelist.net/images/characters/6/384253.jpg",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "I hate myself more than anyone. I always think I have to get my act together, but I end up cowering, running away, sniveling. I want to change. I want to be a competent person.",
    email: "Zenitsuagatsuma6633@gmail.com",
    password: "Nezuko@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
      {
        _id: uuid(),
        firstName: "Giyu",
        lastName: " Tomioka",
        username: "giyutomioka",
        profilePhoto:
          "https://i.pinimg.com/564x/c4/82/bc/c482bcf110ad00beb1409205a00f22cc.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Hashibira",
    lastName: " Inosuke",
    username: "hashibirainosuke",
    profilePhoto:
      "https://i.pinimg.com/564x/e3/95/5c/e3955c17a8caed3eb0ec2e27dd71786b.jpg",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "I'm member of the Twelve Kizuki and a Blood Demon",
    email: "hashibirainosuke2332@gmail.com",
    password: "Inosuke@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
      {
        _id: uuid(),
        firstName: "Giyu",
        lastName: " Tomioka",
        username: "giyutomioka",
        profilePhoto:
          "https://i.pinimg.com/564x/c4/82/bc/c482bcf110ad00beb1409205a00f22cc.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Muzan",
    lastName: "Kibutsuji",
    username: "muzankibutsuji",
    profilePhoto:
      "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "Only feelings are eternal and undying. That is true. I do not remember a single human being I have killed. Flesh dies and that is the end. However... their feelings passed on and never fell to ruin and have even defeated me. I have witnessed that fact with my own eyes and I was so moved that I trembled.",
    email: "muzankibutsuji2323@gmail.com",
    password: "Kibutsuji@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
      {
        _id: uuid(),
        firstName: "Giyu",
        lastName: " Tomioka",
        username: "giyutomioka",
        profilePhoto:
          "https://i.pinimg.com/564x/c4/82/bc/c482bcf110ad00beb1409205a00f22cc.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Giyu",
    lastName: " Tomioka",
    username: "giyutomioka",
    profilePhoto:
      "https://i.pinimg.com/564x/c4/82/bc/c482bcf110ad00beb1409205a00f22cc.jpg",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "Don't cry. Don't despair. Now's not the time for that. [...] Feel the rage. The powerful pure rage of not being able to forgive will become your unswerving drive to take action!",
    email: "giyutomioka66@gmail.com",
    password: "kanaotsuyuri@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
      {
        _id: uuid(),
        firstName: "Giyu",
        lastName: " Tomioka",
        username: "giyutomioka",
        profilePhoto:
          "https://i.pinimg.com/564x/c4/82/bc/c482bcf110ad00beb1409205a00f22cc.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Akaza",
    lastName: "",
    username: "akaza",
    profilePhoto:
      "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/f/f9/Akaza_coaxing_Kyojuro_into_becoming_a_demon.png/revision/latest?cb=20210809062112",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "Don't cry. Don't despair. Now's not the time for that. [...] Feel the rage. The powerful pure rage of not being able to forgive will become your unswerving drive to take action!",
    email: "akaza66@gmail.com",
    password: "kanaotsuyuri@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Muzan",
        lastName: "Kibutsuji",
        username: "muzankibutsuji",
        profilePhoto:
          "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
      },
      {
        _id: uuid(),
        firstName: "Giyu",
        lastName: " Tomioka",
        username: "giyutomioka",
        profilePhoto:
          "https://i.pinimg.com/564x/c4/82/bc/c482bcf110ad00beb1409205a00f22cc.jpg",
      },
    ],
    bookmarks: [],
  },
];
