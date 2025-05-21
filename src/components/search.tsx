'use client';
import Image from 'next/image'

function Search() {
  return (
    <div className="sticky flex items-center bg-transparent border border-border-gray rounded-full px-4 py-2 gap-2">
      <Image
        src="icons/explore.svg"
        alt="Search"
        width={16}
        height={16}
      />
      <input type="text" placeholder="Still building..." className='bg-transparent outline-none w-full' />
    </div>
  )
}

export default Search