"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [form, setform] = useState({ email: '', password: '' })

  useEffect(() => {
    document.title = "Login - Get Me A Chai"
    if (session) {
      router.push('/dashboard')
    }
  }, [session])


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSave = async () => {

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  }


  return (

    <div className="min-h-screen flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10  shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

          <div className=" flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Login to Get Start
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline
                                        cursor-pointer">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4" />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853" />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04" />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335" />
                    </svg>
                  </div>
                  <span className="ml-4">
                    Sign Up with Google
                  </span>
                </button>

                <button onClick={() => signIn('github')}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5 cursor-pointer">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="w-6" viewBox="0 0 32 32">
                      <path fillRule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                    </svg>
                  </div>
                  <span className="ml-4">
                    Sign Up with GitHub
                  </span>
                </button>
                <button onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5 cursor-pointer">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 -2 44 44" version="1.1">
                      <g id="Icons" stroke="none" width="1" fill="none" fillRule="evenodd">
                        <g id="Color-" transform="translate(-702.000000, -265.000000)" fill="#007EBB">
                          <path
                            d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                            id="LinkedIn">

                          </path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="ml-4">
                    Sign Up with LinkedIn
                  </span>
                </button>
              </div>

              <div className="my-12 border-b 
                                 text-center">
                <div
                  className=" px-2 text-sm  font-medium ">
                  Or sign up with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input onChange={handleChange} name='email' value={form.email}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm text-black
                                        focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email" placeholder="Email" />
                <input onChange={handleChange}
                  name='password' value={form.password}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm text-black focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password" placeholder="Password" />
                <button disabled={form.email.length < 5 || form.password.length < 5} onClick={handleSave}
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none
                                        disabled:bg-indigo-200">
                  <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">
                    Sign Up
                  </span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
