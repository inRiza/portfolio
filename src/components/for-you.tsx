'use client';

import Post from './post'
import TechStacks from './tech-stacks'

const ForYou = () => {
  const introduction = {
    username: "RizainF",
    handle: "rizainfird",
    content: "Hello there, my name is Rizain i'm an undergraduate student at Bandung Institute of Technology, majoring in Informatics Engineering currently in my 2nd year. I love to learn new up to date tech and creating unique things. I have interest in Software Development, UI/UX, AI/ML, and Data Analysis. I also love to watch movies and reading news.",
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