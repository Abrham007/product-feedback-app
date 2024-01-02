const blogSchema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  author: String,
  date: String,
});

const BlogPost = mongoose.model("blogpost", blogSchema);

// In-memory data store
let def = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];
let posts = await BlogPost.find();
let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/posts", async (req, res) => {
  posts = await BlogPost.find();
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id", async (req, res) => {
  posts = await BlogPost.find();
  var post = posts.find((post) => post.id == req.params.id);
  res.json(post);
});

//CHALLENGE 3: POST a new post
app.post("/posts", (req, res) => {
  const newPost = new BlogPost({
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  });
  newPost.save();
  res.sendStatus(200);
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", async (req, res) => {
  var id = req.params.id;
  let post = await BlogPost.find({ id: id }).exec();
  if (post.length === 0) {
    var updatedPost = {
      id: id,
      title: req.body.title || post[0].title,
      content: req.body.content || post[0].content,
      date: req.body.date || post[0].date,
    };

    await BlogPost.updateOne({ id: id }, updatedPost);
    res.sendStatus(200);
  } else {
    res.sendStatus(400).json({ error: "post not found" });
  }
});

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", async (req, res) => {
  const response = await BlogPost.deleteOne({ id: req.params.id });
  if (response) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400).json({ error: "post not found" });
  }
});
