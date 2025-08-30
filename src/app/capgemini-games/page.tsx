import Container from '@/components/common/Container'
import GamesCard from '@/components/Landing/GamesCard'
import React from 'react'

const page = () => {
  return (
    <div>

       <div className='container mx-auto max-w-6xl px-4 animate-fade-in-blur'>
        <h1 className='text-2xl mt-16 md:text-4xl font-bold text-[#3B3024] mb-3 sm:mb-4'>All Games...</h1>
    <GamesCard />
  </div>
    </div>
  )
}

export default page
