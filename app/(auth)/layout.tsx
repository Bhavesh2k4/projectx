import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='flex items-center h-screen justify-center px-4 py-10'>
      {children}
    </main>
  )
}

export default AuthLayout