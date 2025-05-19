import Post from './post'

const ForYou = () => {
  const samplePost = {
    username: "RizainF",
    handle: "rizainfird",
    content: "Hello there",
    timestamp: "2h ago",
    avatarUrl: "/general/avatar.jpg",
    imageUrl: "",
    likes: 1,
    comments: 0,
    reposts: 0,
    views: 1234
  }
  return (
    <Post {...samplePost}/>
  )
}

export default ForYou