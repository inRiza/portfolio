import React from 'react'

const Education = () => {
  return (
    <div className='p-4 bg-transparent border border-border-gray rounded-xl h-full'>
        <div className='flex flex-col gap-4'>
            <h2 className='font-bold mb-4'>Education</h2>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='font-bold'>Institut Teknologi Bandung</p>
                    <span className='text-sm text-text-gray'>2023 - Present</span>
                </div>
                <p className='text-sm font-semibold text-text-gray'>BE, Informatics</p>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='font-bold'>SMAN 39 Jakarta</p>
                    <span className='text-sm text-text-gray'>2020 - 2023</span>
                </div>
                <p className='text-sm font-semibold text-text-gray'>Science and Mathematics</p>
            </div>
        </div>
    </div>
  )
}

export default Education