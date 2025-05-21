'use client';

import Post from './post'
import TechStacks from './tech-stacks'

const ForYou = () => {
  const introduction = {
    username: "RizainF",
    handle: "rizainfird",
    content: "Hey there! 👋 My name is Rizain, and I'm a 2nd-year undergraduate student at the Bandung Institute of Technology, majoring in Informatics Engineering 💻. I'm passionate about exploring the latest tech trends and love creating unique, impactful projects 🚀. My interests span across Software Development, UI/UX Design, AI/ML, and Data Analysis 🧠📊. Outside of tech, you'll often find me catching up on movies 🎬 or staying informed by reading the news 🗞️. I'm always eager to learn and grow—let's build something awesome! 💡",
    timestamp: "19 May",
    avatarUrl: "/general/avatar.png",
    imageUrl: "",
    likes: 1,
    comments: 0,
    reposts: 0,
    views: 1234
  }

  const techStack = {
    username: "RizainF",
    handle: "rizainfird",
    content: "My Tech Stacks",
    timestamp: "19 May",
    avatarUrl: "/general/avatar.png",
    imageUrl: "",
    likes: 1,
    comments: 0,
    reposts: 0,
    views: 1234,
    customContent: (
      <div className="w-full h-[400px] bg-black/5 rounded-xl overflow-hidden relative">
        <TechStacks />
      </div>
    )
  }

  return (
    <div className='flex flex-col'>
      <Post {...introduction}/>
      <Post {...techStack}/>
    </div>
  )
}

export default ForYou