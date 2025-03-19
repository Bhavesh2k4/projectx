import React from 'react'
import github from '@/public/icons/github.svg'
import google from '@/public/icons/google.svg'
import Image from 'next/image'
const SocialAuth = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-base-content/20"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-base-200 px-2 text-base-content/70">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button className="btn border-base-content/20 rounded-xl">
        <Image src={github} alt='github' width={20} height={20} className='rounded-xl'/>
          GitHub
        </button>
        <button className="btn border-base-content/20 rounded-xl">
        <Image src={google} alt='google' width={20} height={20} className='rounded-xl'/>
          Google
        </button>
      </div>
    </div>
  )
}

export default SocialAuth