import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights reserved!</p>
    </footer>
  )
}

<<<<<<< HEAD
export default Footer
=======
export default Footer
>>>>>>> bd37a0a (Updated full project with latest changes)
