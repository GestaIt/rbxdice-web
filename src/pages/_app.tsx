import type { Metadata } from "next";
import {
  Onest,
  Oswald
} from "next/font/google";
import "../styles/globals.css";
import "../styles/scroll.css";
import {AppProps} from "next/app";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import Drops from "@/components/Drops";

const onest = Onest({ subsets: ["latin"], adjustFontFallback: false, display: 'swap' })
const title = Oswald({ subsets: ["latin"], adjustFontFallback: false, display: 'swap', weight: ['700'] })

export const metadata: Metadata = {
  title: "RBXDice",
  description: "The Best Roblox Case Unboxing",
}

export default function RBXDiceApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null)
  // TODO: Add user auth :)

  useEffect(() => {
    // @ts-ignore
    window.setUser = setUser
  }, [setUser])

  return (
    <main className={`${onest.className} min-w-full min-h-screen flex flex-col`}>
      {/* Top */}
      <div className='flex flex-row items-center px-7 backdrop-blur-sm bg-white/[0.01] shadow-lg min-w-full h-20'>
        <Link href='/' className='active:scale-90 trans-fast group skew-x-12 flex flex-row gap-1 items-end'>
          <svg className='group-hover:rotate-[360deg] text-purple-400/70 trans-fast duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="34" height="34">
            <path
              d="M40.018,11.05L28.332,5.033c-0.001,0-0.002-0.001-0.003-0.001c-2.711-1.39-5.948-1.388-8.661,0.001L7.982,11.05C6.143,11.997,5,13.87,5,15.939v16.121c0,2.069,1.143,3.943,2.982,4.89l11.688,6.018c1.354,0.694,2.842,1.041,4.328,1.041c1.488,0,2.976-0.347,4.333-1.042l11.686-6.017c1.84-0.947,2.982-2.82,2.982-4.89V15.939C43,13.87,41.857,11.997,40.018,11.05z M24,11c1.381,0,2.5,0.672,2.5,1.5S25.381,14,24,14s-2.5-0.672-2.5-1.5S22.619,11,24,11z M9.5,25C8.672,25,8,23.881,8,22.5C8,21.119,8.672,20,9.5,20s1.5,1.119,1.5,2.5C11,23.881,10.328,25,9.5,25z M13.5,31c-0.828,0-1.5-1.119-1.5-2.5c0-1.381,0.672-2.5,1.5-2.5s1.5,1.119,1.5,2.5C15,29.881,14.328,31,13.5,31z M17.5,37c-0.828,0-1.5-1.119-1.5-2.5c0-1.381,0.672-2.5,1.5-2.5s1.5,1.119,1.5,2.5C19,35.881,18.328,37,17.5,37z M31.5,35c-0.828,0-1.5-1.119-1.5-2.5c0-1.381,0.672-2.5,1.5-2.5s1.5,1.119,1.5,2.5C33,33.881,32.328,35,31.5,35z M36.5,26c-0.828,0-1.5-1.119-1.5-2.5c0-1.381,0.672-2.5,1.5-2.5s1.5,1.119,1.5,2.5C38,24.881,37.328,26,36.5,26z M39.138,16.857l-10.832,5.089c-0.884,0.46-1.834,0.753-2.806,0.908v16.632c0,0.829-0.672,1.5-1.5,1.5s-1.5-0.671-1.5-1.5V22.849c-0.984-0.159-1.952-0.458-2.859-0.93L8.862,16.857c-0.75-0.352-1.072-1.246-0.72-1.995c0.352-0.751,1.246-1.073,1.995-0.72l10.832,5.089c1.918,0.995,4.144,0.993,6.007,0.026l10.886-5.115c0.749-0.353,1.643-0.03,1.995,0.72C40.21,15.612,39.888,16.505,39.138,16.857z"
              fill="currentColor"/>
          </svg>
          <h1 className={`${title.className} group-hover:tracking-[6px] trans-fast duration-500 text-2xl tracking-widest`}>RBXDice</h1>
        </Link>

        {/* Balance */}
        {/*<BalanceCounter />*/}

        {/*/!* Right Side *!/*/}
        {/*<div className='ml-auto flex flex-row items-center'>*/}
        {/*  <PrimaryButton text='Login' leftIcon='/login.svg'/>*/}
        {/*</div>*/}
      </div>

      {/* Bottom Contents */}
      <div className='flex flex-row flex-grow min-w-full'>
        {/* Left Chat */}
        {/*<ChatContainer/>*/}

        {/* Right Contents */}
        <div className='flex items-center justify-center min-h-full flex-grow'>
          {/* Center and give max width :) */}
          <div
            className='flex items-start justify-start min-h-full h-0 relative overflow-y-scroll flex-col max-w-[80rem] w-full p-12'>
            <Component {...pageProps} />
          </div>
        </div>

        {/* Recent Drops */}
        <Drops />
      </div>
    </main>
  )
}