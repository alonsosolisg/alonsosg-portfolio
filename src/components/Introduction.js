import React from 'react'
import Image from 'next/image'


const Introduction = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="ml-10 mt-6 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hi 👋, I&apos;m Alonso Solis Gerloni</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am a resourceful Blockchain Developer from Peru and Italy currently living in Estonia with almost a year of experience in software engineering and Decentralized App development. Good knowledge in smart contracts, web interfaces, and react apps. Looking for a job as a Blockchain Developer that will allow me to build the financial systems of tomorrow.</p>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-4">
                Contact Me
            </a> 
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                See My Projects
            </a> 
        </div>
        <div className="ml-10 lg:mb-6 col-start-8 col-end-12 col-span-5 lg:flex">
            <Image
            src='/photopersonal.png'
            height={400}
            width={400}
            alt="personal"
            />
        </div>                
    </div>
</section>
    )
}

export default Introduction