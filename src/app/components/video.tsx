/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
export default function Video() {
    return <>

        {/* ****** VideoSection ****** */}

        <div>
            <video className="w-[999px] m-28 h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" autoPlay muted loop controls>
                <source src="/video.mp4" type="video/mp4" />
            </video>
        </div>


    </>
} 