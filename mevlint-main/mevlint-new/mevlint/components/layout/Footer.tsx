'use client'
import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer>
        <div className='relative end-0 flex flex-col border-white rounded-xl justify-center align-bottom'>
            <div className='flex flex-row align-top justify-start border-white'>
                <div className='flex flex-row justify-between py-16 px-6 w-full'></div>
                <div className='flex flex-col w-full align-top justify-start py-20 px-10 gap-10'>
                    <div className='flex flex-row align-top justify-start gap-10'>
                        <div className='w-fit flex flex-row align-top justify-start gap-2'>
                            <Link href={'/'} className='w-fit h-fit justify-start text-sm sm:text-sm md:text-lg md'>Home</Link>
                        </div>
                        <div className='w-fit flex flex-row align-top justify-start gap-2'></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer