import React from 'react'
import Image from 'next/image'
import certificates from '../certificates.json'

const Certificates = () => {
  return (
<div className="bg-white" id='certificates'>
  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Certificates</h2>

    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      
      {certificates.map((certificates, index) =>
      <div className="group relative" key={index}>        
        <a href={certificates.link} target="_blank" rel="noreferrer">
          <Image
            src={certificates.image}
            width={500}
            height={500}
            className='m-5'
            alt='certificate'
          />
        </a>
      </div>
      )}
      
    </div>
  </div>
</div>
  )
}

export default Certificates