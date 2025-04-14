import { postModel } from "../models/post.model.js";
import { userModel } from "../models/user.model.js";

let postCreate = async (req, res) => {
  try {
    const { postmessage } = req.body;
    const { id } = req.data.user;

    let imageDest=req.file.path.toString()

    console.log(imageDest)

    let user = await userModel.findById({ _id: id });
    if (!user) return res.status(404).send("User not found");

    let post = new postModel({ postmessage,imageUrl:imageDest ,user: user._id });
console.log(post)
    await post.save();

    user.posts.push(post._id);
    await user.save();

    res.status(201).send("post Created succefully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

let getAllpost = async (req, res) => {
  let post = await postModel.find({}).select("-_id");

  res.status(201).send(post);
  res.render("hello");
};

let likePost = async (req, res) => {
  let postId = req.params.id;

  let post = await postModel.findById({ _id: postId });

  const { id, name } = req.data.user;

  if (post.likes.includes(id)) {
    return res.status(400).send(`${name} already liked the post`);
  }

  post.likes.push(id);

  await post.save();

  res.status(201).send(`${name} like the post`);
};

let editPost = async (req, res) => {
  let postId = req.params.id;
  const { postmessage } = req.body;

  await postModel.findByIdAndUpdate(
    { _id: postId },
    { $set: { postmessage: postmessage } },
    { new: true }
  );

  res.status(201).send(`post update succefully`);
};

export { postCreate, getAllpost, likePost, editPost };
