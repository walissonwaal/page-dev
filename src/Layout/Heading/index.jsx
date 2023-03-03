import Image from 'next/image'
import React from 'react'
import { Redes } from '@/src/Layout'

const engineer = '<Software Engineer />'

const Index = () => {
  return (
    <section className='h-screen flex justify-center items-center'>
      {/* <Image
        className='absolute opacity-30 h-full blur'
        src='/assets/image.png'
        height={3462}
        width={5193}
      /> */}
      <div className='absolute w-full h-full bg-[#000000] opacity-50'></div>
      <div className='flex flex-col items-center text-white z-50'>
        <p>Olá! Sou...</p>
        <h1 className='uppercase text-center md:text-start'>
          Walisson <span className='font-black text-secondary'>Gomes</span>
        </h1>
        <p className='animation my-2 font-light'>{engineer}</p>
        <Redes />
      </div>
    </section>
  )
}

export default Index
