'use client';

import Post from './post'
import TechStacks from './tech-stacks'

const ForYou = () => {
  const introduction = {
    username: "RizainF",
    handle: "rizainfird",
    content: "Hey there! 👋 I'm Rizain, a 2nd-year Informatics Engineering student at the Bandung Institute of Technology 💻. I'm a software developer with a strong foundation in both frontend and backend development—building intuitive interfaces and robust systems is my thing ⚙️🎨. I'm passionate about creating meaningful tech products and constantly exploring the latest in UI/UX, AI/ML, and Data Analysis 🧠📊. Outside the code, I enjoy watching movies 🎬 and staying updated with the latest news 🗞️. Always curious, always building! 🚀",
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