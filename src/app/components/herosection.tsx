/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
export default function HeroSection() {
    return <>

        {/* ****** HeroSection ****** */}

        <section>
            <div className="bg-gray-400 transition-all sm:h-[999px]  md:h-[450px] lg:h-[450px]  sm:grid grid-cols-5 grid-rows-2 px-4 py-6 space-y-6 sm:space-y-0 sm:gap-4">

                <div className="md:h-[400px] lg:h-[400px] sm:h-[420px] justify-center align-middle col-span-5 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
                    {/* <div className="ml-20 w-80">
                        <h2 className="text-white text-4xl">Welcome To
                            <span className="mt-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-950 hover:bg-green-500 relative inline-block">
                                <span className="relative text-white">Robo World</span>
                            </span>
                        </h2>
                        <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore?</p>

                        <a href="/getstarted" target="_blank" className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">Get Started</a>
                    </div> */}
                    <div className="relative isolate px-6 pt-14 lg:px-8">
                        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" id="heroa"></div>
                        </div>
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome To <br /> Robo World</h1>
                                <p className="mt-6 text-lg leading-8 text-green-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a href="/" className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                                    <a href="/getstarted" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" id="herob"></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </>
}
