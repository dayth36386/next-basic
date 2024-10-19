import React from 'react'
import Link from 'next/link'
import Image from "next/image";
function Nav() {
  return (
    <div className='flex justify-between bg-gray-50 text-black uppercase drop-shadow-md'>
        <div className='logo p-10 font-medium'>
          <Link href="/"><Image src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="test1" width={100}height={100}/></Link>
        </div>
        <ul className='flex p-10 font-medium '>
            <li className='mx-5 hover:text-sky-500 transition delay-10'><Link href="/">Home</Link></li>
            <li className='mx-5 hover:text-sky-500 transition delay-10'><Link href="/about">About</Link></li>
            <li className='mx-5 hover:text-sky-500 transition delay-10'><Link href="/all-products">All Product</Link></li>
        </ul>
    </div>
  )
}

export default Nav
