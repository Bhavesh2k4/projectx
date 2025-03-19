import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import SocialAuth from '@/components/social-auth/socialauth'
import Link from 'next/link'
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='flex items-center justify-center min-h-screen bg-base-100 px-4 py-10'>
      <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className='flex flex-col items-center mb-8'>
            <Link href='/'>
              <Image src={logo} alt='logo' width={150} height={100} className='rounded-2xl'/>
            </Link>
            <h1 className='text-2xl font-bold text-center'>Get Started</h1>
            <p className='text-center text-base-content/70 mt-2'>Manage your career with ease</p>
          </div>
          
          <div className="space-y-6">
            {children}
            
            <SocialAuth />
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout