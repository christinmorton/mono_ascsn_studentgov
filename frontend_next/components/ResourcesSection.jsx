import React from 'react'

import illustration2 from '@/assets/vendor_assets/template_1/Illustration2.png'
import Image from 'next/image'

const ResourcesSection = ({content}) => {
    const features = [
        "Powerfull online protection.",
        "Internet without borders.",
        "Supercharged VPN",
        "No specific time limits."
      ]
      
    return (
        <section className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
                <div className="h-full w-full p-4">
                    <Image
                    src={illustration2}
                    alt="VPN Illustrasi"
                    layout="responsive"
                    quality={100}
                    height={414}
                    width={508}
                    />
                </div>
                <div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12">
                    <h1 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">{content.Title}</h1>
    
                    <p className="my-2 text-black-500">{content.MarketingLead}</p>
                    <ul className="text-black-500 self-start list-inside ml-8">
                        {features.map((feature, index) => (
                        <li
                            className="relative circle-check custom-list"
                            // custom={{duration: 2 + index}}
                            // variants={scrollAnimation}
                            key={index}
                            // whileHover={{
                            // scale : 1.1,
                            // transition: {
                            // duration: .2
                            // }
                            // }}
                            >
                            {feature}
                        </li>
                        )
                        )}
                    </ul>
                </div>
                <div>
                </div>
            </div>
            
        </section>
      )
}

export default ResourcesSection