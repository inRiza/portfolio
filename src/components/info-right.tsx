import React from 'react'

const InfoRight = () => {
  return (
    <div className='p-4 bg-transparent border border-border-gray rounded-xl h-full overflow-y-auto scrollbar-hide'>
      <h2 className='font-bold mb-4'>Experiences</h2>
      <div className='flex flex-col'>
        {/* tm1 */}
        <div className='relative flex'>
          <div className='flex flex-col items-center'>
            <div className='w-3 h-3 rounded-full bg-transparent border-2 border-border-gray'></div>
            <div className='w-0.5 h-full bg-gray-300'></div>
          </div>

          <div className='flex flex-col pl-2 ml-2 gap-1 cursor-pointer hover:scale-105 transition rounded-lg'>
            <div className='flex flex-row justify-between items-center gap-2'>
              <p className='font-bold text-lg'>Technology and Development Department Staff</p>
              <p className='mr-2 text-sm text-text-gray'>2024 - Present</p>
            </div>
            <p className='text-sm font-semibold text-text-gray'>HMIF</p>
            <span className='text-xs text-text-gray mb-5'>Develop a frontend for the HMIF app, a platform for all the students in the Informatics and System Technology Department
              to interact and share or maintain informations about their department.
            </span>
          </div>
        </div>

        {/* tm2 */}
        <div className='relative flex'>
          <div className='flex flex-col items-center'>
            <div className='w-3 h-3 rounded-full bg-transparent border-2 border-border-gray'></div>
            <div className='w-0.5 h-full bg-gray-300'></div>
          </div>
          
          <div className='flex flex-col pl-2 ml-2 gap-1 cursor-pointer hover:scale-105 transition rounded-lg'>
            <div className='flex flex-row justify-between items-center gap-2'>
              <p className='font-bold text-lg'>UI/UX Designer</p>
              <p className='mr-2 text-sm text-text-gray'>2024</p>
            </div>
            <p className='text-sm font-semibold text-text-gray'>Bawaslu RI</p>
            <span className='text-xs text-text-gray mb-5'>
            Created the UI/UX design for the official website for Bawaslu RI, 
            Indonesia&apos;s central election supervisory goverment organization.
            </span>
          </div>
        </div>

        {/* tm3 */}
        <div className='relative flex'>
          <div className='flex flex-col items-center'>
            <div className='w-3 h-3 rounded-full bg-transparent border-2 border-border-gray'></div>
            <div className='w-0.5 h-full bg-gray-300'></div>
          </div>
          
          <div className='flex flex-col pl-2 ml-2 gap-1 cursor-pointer hover:scale-105 rounded-lg transition'>
            <div className='flex flex-row justify-between items-center gap-2'>
              <p className='font-bold text-lg'>UI/UX Designer</p>
              <p className='mr-2 text-sm text-text-gray'>2024</p>
            </div>
            <p className='text-sm font-semibold text-text-gray'>Parade Wisuda Oktober HMIF</p>
            <span className='text-xs text-text-gray mb-5'>
            Created the UI/UX design for the catalog and theme page for Parade Wisuda Oktober HMIF website.
            a ceremony for the Informatics and System Technology graduates.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoRight