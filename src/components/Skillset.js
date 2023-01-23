import React from 'react'
import skills from '../skills.json'
import Image from 'next/image'

const Skillset = () => {
  return (
    <section className="ml-10 bg-white dark:bg-gray-900" id='skillset'>
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Skillset</h2>
      </div>
      <div className="space-y-8 sm:gap-10 md:grid sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-12 md:space-y-0">
          {skills.map((skills, index) =>
          <a href={skills.link} target="_blank" key={index} rel="noreferrer">
            <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <Image
                      src={skills.image}
                      height={45}
                      width={45}
                      alt="skills"
                      />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{skills.skill}</h3>
            </div>
          </a>
          )}
      </div>
  </div>
</section>
  )
}

export default Skillset