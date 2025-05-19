import Post from "./post"

const Achievements = () => {
  const achievement1 = {
    username: "RizainF",
    handle: "rizainfird",
    content: "Cooming Soon!",
    timestamp: "19 May",
    avatarUrl: "/general/avatar.png",
    imageUrl: "",
    likes: 1,
    comments: 0,
    reposts: 0,
    views: 1234
  }
  
  return (
    <Post {...achievement1} />
  )
}

export default Achievements