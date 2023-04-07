/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";


export default function Footer() {
  return <>
    <Head>
      <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
    </Head>

    {/* ****** FooterSection ****** */}

    <footer className="bg-gray-400 hover:bg-gray-800 items-center w-full rounded-lg shadow dark:bg-gray-900 ">
      <div className="w-full container mx-auto p-4 md:px-6">
        <div className="flex items-center justify-center">
          <div className="grid w-80 grid-rows-4 gap-1">
            <br />
            <p className="font-semibold text-white">💌 Get the best of Product Hunt, directly in your inbox.</p>
            <input type="text" className="h-10 w-full rounded border p-2 text-sm" placeholder="Your email" />
            <button className="rounded bg-[#FD5E57] text-gray-50 hover:bg-gradient-to-r hover:from-[#FD5E57] hover:to-[#FC477E]"><Link target="_roboworld" href="mailto:rrabeeshussain@gmail.com">Subscribe to the newsletter</Link></button>
            <Link target="_roboworld" href="/contact">
              <p className="mt-4 flex items-center text-xs text-gray-500 hover:text-gray-50">
                Read the latest issue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 h-3 w-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </p>
            </Link>
          </div>
        </div>
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://ranarabees.github.io/Responsive_Portfolio_Website/" className="flex items-center mb-4 sm:mb-0">
            <img src="/logob.png" className="h-20 mr-3 hover:h-24" alt="Logo" />
          </a>
          <span className="block text-sm text-gray-500 md:text-center text-center sm:text-center dark:text-gray-400">
            © <a href="https://ranarabees.pythonanywhere.com/" className="hover:text-white text-center">RanaVerse™ </a>.
            <p className="hover:text-green-500 text-center"> All Rights Reserved. This site is proudly built by </p>
            <a href="https://ranarabees.pythonanywhere.com/" className="hover:text-red-500 text-center"> RanaVerse .</a></span>
          <ul className=" flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100088975870807" className="mr-4 hover:underline md:mr-6 ">
                <img className="h-14 w-14 inline-block" src="/facebook.png" alt="facebook Not Loaded" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/RanaRabees" className="mr-4 hover:underline md:mr-6">
                <img className="h-14 w-14 inline-block" src="/twiter.png" alt="twiter Not Loaded" />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/TEa2Fcmb" className="mr-4 hover:underline md:mr-6 ">
                <img className="h-14 w-14 inline-block" src="/discord.png" alt="discord Not Loaded" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </footer>


  </>;
}



