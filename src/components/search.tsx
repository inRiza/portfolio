'use client';
import Image from 'next/image'

function Search() {
  return (
    <div className="sticky flex items-center bg-border-gray rounded-full px-4 py-2 gap-2">
      <Image
        src="icons/explore.svg"
        alt="Search"
        width={16}
        height={16}
      />
      <input type="text" placeholder="Ask me anything..." className='bg-transparent outline-none' />
    </div>
  )
}

export default Search