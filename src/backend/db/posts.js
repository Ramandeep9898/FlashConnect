import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    firstName: "Nezuko",
    lastName: "Kamado",
    username: "nezukokamado",
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Kh6YvZZ0MV-fiOWzjRgQWCQGJbZFM45RcA&usqp=CAU",
    content: "hellooooo ",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Zenitsu ",
        lastName: "Agatsuma",
        username: "zenitsuagatsuma",
        profilePhoto:
          "https://cdn.myanimelist.net/images/characters/6/384253.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Kanao",
        lastName: "Tsuyuri",
        username: "kanaotsuyuri",
        profilePhoto:
          "https://i.pinimg.com/736x/41/26/e1/4126e16dcbaec8c256938a69ea6aac9a.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Tnjiro ",
    lastName: "Kamado",
    username: "tnjirokamado",
    profilePhoto:
      "https://i.pinimg.com/736x/89/b1/d4/89b1d419bf1e7a9d2df7fa55dec05d14.jpg",
    content:
      "No matter how many people you may lose, you have no choice but to go on living -- no matter how devastating the blows, maybe",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "nezukokamado",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Hashibira",
    lastName: " Inosuke",
    username: "hashibirainosuke",
    profilePhoto:
      "https://i.pinimg.com/564x/e3/95/5c/e3955c17a8caed3eb0ec2e27dd71786b.jpg",
    content: "It's not about going first. It's about the overall flow.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "nezukokamado",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Zenitsu ",
    lastName: "Agatsuma",
    username: "zenitsuagatsuma",
    profilePhoto: "https://cdn.myanimelist.net/images/characters/6/384253.jpg",
    content: "It's not about going first. It's about the overall flow.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "nezukokamado",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Muzan",
    lastName: "Kibutsuji",
    username: "muzankibutsuji",
    profilePhoto:
      "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    content:
      "Don’t ever give up. Even if it’s painful, even if it’s agonizing, don’t try to take the easy way out.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "nezukokamado",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
