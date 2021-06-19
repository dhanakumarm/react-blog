export const POST_INDEX = [
  {
    id: "4",
    title: "ttest",
    content:
      "# This is an H1\r\n\r\n## This is an H2\r\n\r\n###### This is an H6",
    tags: "yii",
    status: "2",
    create_time: "1624000234",
    update_time: "1624016345",
    author_id: "1",
    commentCount: 0,
  },
  {
    id: "3",
    title: "This is Testing YII POST",
    content: "<h1>Test</h1>",
    tags: "yii, blog",
    status: "2",
    create_time: "1623757385",
    update_time: "1623757464",
    author_id: "1",
    commentCount: 0,
  },
  {
    id: "1",
    title: "Welcome!",
    content:
      "This blog system is developed using Yii. It is meant to demonstrate how to use Yii to build a complete real-world application. Complete source code may be found in the Yii releases.\r\n\r\nFeel free to try this system by writing new posts and posting comments.",
    tags: "yii, blog",
    status: "2",
    create_time: "1230952187",
    update_time: "1230952187",
    author_id: "1",
    commentCount: "2",
  },
];

export const POST_VIEW = [
  {
    id: "1",
    title: "Welcome!",
    content:
      "This blog system is developed using Yii. It is meant to demonstrate how to use Yii to build a complete real-world application. Complete source code may be found in the Yii releases.\r\n\r\nFeel free to try this system by writing new posts and posting comments.",
    tags: "yii, blog",
    status: "2",
    create_time: "1230952187",
    update_time: "1230952187",
    author_id: "1",
    author: {
      id: "1",
      username: "demo",
      password: "$2a$10$JTJf6/XqC94rrOtzuF397OHa4mbmZrVTBOQCmYD9U.obZRUut4BoC",
      email: "webmaster@example.com",
      profile: null,
    },
    comments: [
      {
        id: "3",
        content: "test",
        status: "2",
        create_time: "1623908787",
        author: "s3 Test Payment 2",
        email: "dhanakumar.m@kgisl.com",
        url: "",
        post_id: "1",
      },
      {
        id: "2",
        content: "test",
        status: "2",
        create_time: "1623908739",
        author: "Kumar Dhana Kumar Dhana ",
        email: "tmdhanakumar@gmail.com",
        url: "",
        post_id: "1",
      },
    ],
  },
];

export const TAGS = [{ blog: 10, test: 9, yii: 11 }];

// Only approved comments
export const RECENT_COMMENTS = [
  {
    id: "3",
    content: "test",
    status: "2",
    create_time: "1623908787",
    author: "s3 Test Payment 2",
    email: "dhanakumar.m@kgisl.com",
    url: "",
    post_id: "1",
    post: {
      id: "1",
      title: "Welcome!",
      content:
        "This blog system is developed using Yii. It is meant to demonstrate how to use Yii to build a complete real-world application. Complete source code may be found in the Yii releases.\r\n\r\nFeel free to try this system by writing new posts and posting comments.",
      tags: "yii, blog",
      status: "2",
      create_time: "1230952187",
      update_time: "1230952187",
      author_id: "1",
    },
  },
  {
    id: "2",
    content: "test",
    status: "2",
    create_time: "1623908739",
    author: "Kumar Dhana Kumar Dhana ",
    email: "tmdhanakumar@gmail.com",
    url: "",
    post_id: "1",
    post: {
      id: "1",
      title: "Welcome!",
      content:
        "This blog system is developed using Yii. It is meant to demonstrate how to use Yii to build a complete real-world application. Complete source code may be found in the Yii releases.\r\n\r\nFeel free to try this system by writing new posts and posting comments.",
      tags: "yii, blog",
      status: "2",
      create_time: "1230952187",
      update_time: "1230952187",
      author_id: "1",
    },
  },
  {
    id: "1",
    content: "This is a test comment.",
    status: "2",
    create_time: "1230952187",
    author: "Tester",
    email: "tester@example.com",
    url: null,
    post_id: "2",
    post: {
      id: "2",
      title: "A Test Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: "test",
      status: "3",
      create_time: "1230952187",
      update_time: "1623757477",
      author_id: "1",
    },
  },
];


// All comments including pending approval
export const COMMENTS_LIST = [
  {
    id: "4",
    content: "dkumar test",
    status: "1",
    create_time: "1624108573",
    author: "DKUMAR",
    email: "dhanakumar.m@kgisl.com",
    url: "",
    post_id: "1",
    post: {
      id: "1",
      title: "Welcome!",
      content:
        "This blog system is developed using Yii. It is meant to demonstrate how to use Yii to build a complete real-world application. Complete source code may be found in the Yii releases.\r\n\r\nFeel free to try this system by writing new posts and posting comments.",
      tags: "yii, blog",
      status: "2",
      create_time: "1230952187",
      update_time: "1230952187",
      author_id: "1",
    },
  },
  {
    id: "3",
    content: "test",
    status: "2",
    create_time: "1623908787",
    author: "s3 Test Payment 2",
    email: "dhanakumar.m@kgisl.com",
    url: "",
    post_id: "1",
    post: {
      id: "1",
      title: "Welcome!",
      content:
        "This blog system is developed using Yii. It is meant to demonstrate how to use Yii to build a complete real-world application. Complete source code may be found in the Yii releases.\r\n\r\nFeel free to try this system by writing new posts and posting comments.",
      tags: "yii, blog",
      status: "2",
      create_time: "1230952187",
      update_time: "1230952187",
      author_id: "1",
    },
  },
  {
    id: "2",
    content: "test",
    status: "2",
    create_time: "1623908739",
    author: "Kumar Dhana Kumar Dhana ",
    email: "tmdhanakumar@gmail.com",
    url: "",
    post_id: "1",
    post: {
      id: "1",
      title: "Welcome!",
      content:
        "This blog system is developed using Yii. It is meant to demonstrate how to use Yii to build a complete real-world application. Complete source code may be found in the Yii releases.\r\n\r\nFeel free to try this system by writing new posts and posting comments.",
      tags: "yii, blog",
      status: "2",
      create_time: "1230952187",
      update_time: "1230952187",
      author_id: "1",
    },
  },
  {
    id: "1",
    content: "This is a test comment.",
    status: "2",
    create_time: "1230952187",
    author: "Tester",
    email: "tester@example.com",
    url: null,
    post_id: "2",
    post: {
      id: "2",
      title: "A Test Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: "test",
      status: "3",
      create_time: "1230952187",
      update_time: "1623757477",
      author_id: "1",
    },
  },
];
