import Image from 'next/image'
import React from 'react'

import testImage from '@/assets/images/wc_union_3_0.webp'
import ButtonPrimary from './ButtonPrimary'

const GuidanceSection = ({content}) => {
  return (
    <section className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
        
        <div className='grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12'>
          <div className="w-full flex flex-col items-start justify-center ml-auto w-full lg:w-9/12">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">Investing in Our Future.<br /> Students First.</h1>
            <h1 className="text-xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal pt-6">{content.Title}</h1>

            <p className="my-2 text-black-500">{content.MarketingLead}</p>

            <ButtonPrimary>Your Voice</ButtonPrimary>
          </div>

          <div className="h-full w-full p-4">
            <Image src={testImage} alt='a simple test image' layout="responsive"
              quality={100}
              height={414}
              width={508} />
          </div>
        </div>
        
    </section>
  )
}

export default GuidanceSection