'use client'

import React from "react"
import Image from "next/image"

const ErrorSection = () => {
  return (
    <main className="bg-gray-950 flex flex-col items-center justify-center">
      <div className="items-center text-center">
        <Image 
          src="/hutao2.png" 
          alt="Hu Tao from Genshin Impact" 
          width={400} 
          height={400} 
          priority
        />
        <h1 className="text-3xl font-extrabold text-white mt-4">
          Under construction by
          <br />
          Wangsheng Funeral Parlor
        </h1>
      </div>  
    </main>
  )
}

export default ErrorSection

