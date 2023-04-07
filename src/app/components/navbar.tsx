/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
export default function Navbar() {
  return <>

    {/* ****** NavbarSection ****** */}

    <nav className="bg-gradient-to-tr from-indigo-400 to-indigo-950 hover:bg-blue-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="hover:h-14 sm:h-14 sm:hover:h-20 transition-all block h-20 w-auto lg:hidden" src="/logob.png" alt="Robo World" />
              <img className="hover:h-14 sm:h-14 sm:hover:h-20 transition-all hidden h-20 w-auto lg:block" src="/logob.png" alt="Robo World" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative lg:ml-[380px] md:ml-[380px]">

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a href="/" className="shadow-2xlxl hover:bg-red-950 hover:italic hover:text-[1.40rem] hover:text-emerald-600 text-white rounded-md hover:rounded-full transition-all px-3 py-2 text-xl font-medium" aria-current="page">Home</a>

                    <a href="/about" className="shadow-2xlxl text-gray-300 hover:bg-blue-950 hover:italic hover:text-[1.40rem] hover:text-red-500 hover:rounded-full transition-all rounded-md px-3 py-2 text-xl font-medium">About</a>

                    <a href="/services" className="shadow-2xlxl text-gray-300 hover:bg-blue-950 hover:italic hover:text-[1.40rem] hover:text-red-500 hover:rounded-full transition-all rounded-md px-3 py-2 text-xl font-medium">Services</a>

                    <a href="/contact" className="shadow-2xlxl text-gray-300 hover:bg-blue-950 hover:italic hover:text-[1.40rem] hover:text-red-500 hover:rounded-full transition-all rounded-md px-3 py-2 text-xl font-medium">Contact</a>

                    <a href="/docs" className="shadow-2xlxl text-gray-300 hover:bg-blue-950 hover:italic hover:text-[1.40rem] hover:text-red-500 hover:rounded-full transition-all rounded-md px-3 py-2 text-xl font-medium">Docs</a>

                    <a href="/getstarted" className="shadow-2xlxl hover:bg-red-950 hover:italic hover:text-[1.40rem] hover:text-emerald-600 text-white hover:rounded-full transition-all rounded-md px-3 py-2 text-xl font-medium" aria-current="page">Get Started</a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="sm:hidden bg-gradient-to-tl from-indigo-400 to-indigo-950 text-center" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-5">
          <hr />
          <Link href="/" className="hover:italic hover:text-orange-400 text-gray-300 px-3 py-2 rounded-md text-xl font-medium md:text-lg" aria-current="page">
            Home
          </Link>
          <br />
          <hr />
          <Link href="/about" className="hover:italic hover:text-pink-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
            About
          </Link>
          <br />
          <hr />
          <Link href="/services" className="hover:italic hover:text-green-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
            Services
          </Link>
          <br />
          <hr />
          <Link href="/contact" className="hover:italic hover:text-blue-400 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
            Contact
          </Link>
          <br />
          <hr />
          <Link href="/docs" className="hover:italic hover:text-teal-600 text-gray-300  hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
            Docs
          </Link>
          <br />
          <hr />
          <Link href="#getstarted" className="hover:italic hover:text-orange-400 text-gray-300  hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium md:text-lg">
            Get_Started
          </Link>
          <hr />


        </div>
      </div>
    </nav>

  </>
}
