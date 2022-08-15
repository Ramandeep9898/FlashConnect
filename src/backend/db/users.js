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
    email: "nezuko1234@gmail.com",
    profilePhoto:
      "https://upload.wikimedia.org/wikipedia/en/c/c0/NezukoKamado.png",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "I'm member of the Twelve Kizuki and a Blood Demon",
    website: "",
    password: "Nezuko@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [{}],
    followers: [{}],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Tnjiro ",
    lastName: "Kamado",
    username: "tnjirokamado",
    email: "tnjiroKamado2323@gmail.com",
    profilePhoto:
      "https://dthezntil550i.cloudfront.net/qh/latest/qh2008190539069680015552142/1280_960/77ddd069-33bc-4716-95b2-28a502889169.jp",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "I'm member of the Twelve Kizuki and a Blood DemonIn order to soothe the spirits of those it killed, and to make sure it claims no further victims... I will swing my blade down and lop off the head of any demon without mercy! But... I will not belittle those who regret their actions and suffer over the things they did as demons. Because demons were once human. Because they were like me.",
    website: "",
    password: "Nezuko@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [{}],
    followers: [{}],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Zenitsu ",
    lastName: "Agatsuma",
    username: "zenitsuagatsuma",
    email: "Zenitsuagatsuma6633@gmail.com",
    profilePhoto: "https://cdn.myanimelist.net/images/characters/6/384253.jpg",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "I hate myself more than anyone. I always think I have to get my act together, but I end up cowering, running away, sniveling. I want to change. I want to be a competent person.",
    website: "",
    password: "Nezuko@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [{}],
    followers: [{}],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Hashibira",
    lastName: " Inosuke",
    username: "hashibirainosuke",
    email: "hashibirainosuke2332@gmail.com",
    profilePhoto:
      "https://upload.wikimedia.org/wikipedia/en/c/c0/NezukoKamado.png",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "I'm member of the Twelve Kizuki and a Blood Demon",
    website: "",
    password: "Inosuke@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [{}],
    followers: [{}],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Muzan",
    lastName: "Kibutsuji",
    username: "muzankibutsuji",
    email: "muzankibutsuji2323@gmail.com",
    profilePhoto:
      "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    coverPhoto:
      "https://cdn.bhdw.net/im/demon-slayer-nezuko-kamado-16-wallpaper-82505_w635.webp",
    bio: "Only feelings are eternal and undying. That is true. I do not remember a single human being I have killed. Flesh dies and that is the end. However... their feelings passed on and never fell to ruin and have even defeated me. I have witnessed that fact with my own eyes and I was so moved that I trembled.",
    website: "",
    password: "Kibutsuji@1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [{}],
    followers: [{}],
    bookmarks: [],
  },
];
