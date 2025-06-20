"use client"
import React, { useState, useRef } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  const timeoutRef = useRef()

  const handleFocus = () => {
    clearTimeout(timeoutRef.current);
  };
  const handleBlur = () => {
    timeoutRef.current = setTimeout(() => {
      setShowdropdown(false);
    }, 100);
  };


  return (
    <nav className='bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 flex justify-between items-center px-4 md:h-16'>

      <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
        <img className='invertImg' src="https://res.cloudinary.com/darj9wemb/image/upload/v1747129841/tea_c3w6at.gif" width={44} alt="" />
        <span className='text-xl md:text-base my-3 md:my-0'>Get Me a Chai!</span>
      </Link>



      <div className='relative flex justify-center items-center   gap-1'>
        {!session && <>
          <button onClick={() => setShowdropdown(!showdropdown)} onBlur={handleBlur} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Projects<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <div id="dropdown" onFocus={handleFocus} className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link onClick={() => setShowdropdown(false)} href={`https://student-isahil.github.io/spotify-clone/`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Spotify Clone</Link>
              </li>
              <li>
                <Link onClick={() => setShowdropdown(false)} href="/passop"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Password Manager</Link>
              </li>
            </ul>
          </div></>
        }
        {session && <>
          <button onClick={() => setShowdropdown(!showdropdown)} onBlur={handleBlur} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdown" onFocus={handleFocus} className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link onClick={() => setShowdropdown(false)} href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} onClick={() => setShowdropdown(false)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <button onClick={() => signOut({ callbackUrl: '/' })} className=" px-4 py-2 w-full text-start
                     hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
              </li>

            </ul>
          </div></>
        }


        {session && <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ' onClick={() => { signOut() }}>Logout</button>}

        {!session && <Link href={"/login"}>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '>Login</button></Link>}
      </div>
    </nav>
  )
}

export default Navbar


