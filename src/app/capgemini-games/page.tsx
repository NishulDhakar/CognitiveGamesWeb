"use client"

import GamesCard from '@/components/Landing/GamesCard'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
    <div className="hidden md:block px-4 pt-6 sm:pt-8">
        <button
          onClick={() => window.location.replace("/")}
          className="flex items-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-4 py-2 text-base font-bold tracking-wide text-black shadow-[3px_3px_0px_0px_#000] transition-all duration-200 hover:bg-black hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[3px_3px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:px-6 sm:py-3 sm:text-lg"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" /> Back to Dashboard
        </button>
      </div>
       <div className='container mx-auto max-w-6xl px-4 animate-fade-in-blur'>
        <h1 className='text-2xl mt-4 md:text-4xl font-bold text-[#3B3024] mb-3 sm:mb-4'>Games...</h1>
    <GamesCard />
  </div>
    </div>
  )
}

export default page
