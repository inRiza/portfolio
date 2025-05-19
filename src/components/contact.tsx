import Post from "./post"

const Contact = () => {
  const myContact = {
    username: "RizainF",
    handle: "rizainfird",
    content: "If you want to contact me, you can send me a message on my social media accounts or send direct message to +625865193061.",
    timestamp: "19 May",
    avatarUrl: "/general/avatar.png",
    imageUrl: "",
    likes: 1,
    comments: 0,
    reposts: 0,
    views: 1234
  }
  
  return (
    <Post {...myContact} />
  )
}

export default Contact