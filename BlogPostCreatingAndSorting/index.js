/* 
    Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
*/

const posts = [
  { name: "Blog 1", id: 1 },
  { name: "Blog 2", id: 2 },
  { name: "Blog 3", id: 3 },
];

const listPosts = () => {
  console.log("Current posts:");
  posts.forEach((post) => console.log(post));
};

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (newPost && newPost.name && newPost.id) {
      posts.push(newPost);
      return resolve("Post added successfully.");
    }
    reject(new Error("Invalid post data."));
  });
};

async function blogControl(post) {
  try {
    const result = await addPost(post);
    console.log(result);
    listPosts();
  } catch (error) {
    console.log(error);
  }
}

blogControl({ name: "Blog 4", id: 4 }); // Post added successfully.
blogControl({ name: "Blog 5" }); // Error: Invalid post data.
