import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const menuList = [
  {
    id: 1,
    name: 'Home',
    link: '/',
    icon: 'icons/home.svg',
  },
  {
    id: 2,
    name: 'Explore',
    link: '/explore',
    icon: 'icons/explore.svg',  
  },
  {
    id: 3,
    name: 'Notifications',
    link: '/notifications',
    icon: 'icons/notification.svg',
  },
  {
    id: 4,
    name: 'Messages',
    link: '/messages',
    icon: 'icons/message.svg',
  },
  {
    id: 5,
    name: 'Bookmarks',
    link: '/bookmarks',
    icon: 'icons/bookmark.svg',
  },
  {
    id: 6,
    name: 'Jobs',
    link: '/jobs',
    icon: 'icons/job.svg',
  },
  {
    id: 7,
    name: 'Profile',
    link: '/profile',
    icon: 'icons/profile.svg',
  },
  {
    id: 8,
    name: 'More',
    link: '/more',
    icon: 'icons/more.svg',
  },
];

const LeftBar = () => {
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
      <div className='flex flex-col gap-4 text-lg'>
        <Link href="/" className='p-2 rounded-full'>
          <Image src="icons/logo.svg" alt="logo" width={24} height={24}/>
        </Link>
        <div className='flex flex-col'>
          {menuList.map((item) => (
            <Link href={item.link} className='p-2 rounded-full hover:bg-hover-gray flex items-center gap-4' key={item.id}>
              <Image 
                src={item.icon} 
                alt={item.name} 
                width={24} 
                height={24} 
              />
              <span className='hidden xxl:inline'>{item.name}</span>
            </Link>
          ))}
        </div>
        <Link href="/" className='xxl:hidden bg-white text-black rounded-full w-12 h-12 flex items-center justify-center'>
          <Image src="icons/post.svg" alt="post" width={24} height={24}/>
        </Link>
        <Link href="/" className='hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20'>
          Post
        </Link>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full relative overflow-hidden'>
            <Link href="/" className=''>
              <Image src="/general/avatar.jpg" alt="profile" fill/>
            </Link>
          </div>
          <div className='hidden xxl:flex flex-col'>
            <span className='font-bold'>Rizain</span>
            <span className='text-sm text-text-gray'>@rizainfird</span>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default LeftBar