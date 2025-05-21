import Post from "./post"

const Projects = () => {
  const projects1 = {
    username: "RizainF",
    handle: "rizainfird",
    content: "🧠 Readibly is a dyslexia-friendly search tool that makes reading and navigating text easier with text-to-speech, speech-to-text, and eye-tracking support. Built for real accessibility—fast, simple, and actually useful. 🔍🗣️👁️",
    timestamp: "19 May",
    avatarUrl: "/general/avatar.png",
    imageUrl: "/post/readibly.png",
    likes: 1,
    comments: 0,
    reposts: 0,
    views: 1234
  }
  
  return (
    <Post {...projects1} />
  )
}

export default Projects