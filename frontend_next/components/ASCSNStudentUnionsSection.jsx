import React from 'react'
import ASCSNChildSection from './ASCSNChildSection'
import ButtonOutline from './ButtonOutline'
import Image from 'next/image'
import StudentUnionTabs from './StudentUnionTabs'

const ASCSNStudentUnionsSection = ({content}) => {

    return (
        <section className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
            <div className="flex flex-col w-full">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">{content.Title}</h1>
                
                <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">{content.MarketingLead}</p>
            </div>

            <div className='w-[100%] bg-[#004890] text-white'>
               <StudentUnionTabs studentUnions={content.ChildSection} />
            </div>

            {/* <div className='flex flex-row items-center justify-evenly'>
                {content.ChildSection.map((section, index) => (
                    // <ASCSNChildSection key={index} child={section} />
                    <div className="border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
                        <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                        <Image
                            src="/assets/Free.png"
                            width={145}
                            height={165}
                            alt="Free Plan"
                        />
                        </div>
                        <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                        {section.Heading}
                        </p>
                        <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                            <li className="relative check custom-list my-2">
                                {section.PlainTextDescription}
                            </li>
                        </ul>
                        <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                            <p className="text-2xl text-black-600 text-center mb-4 ">
                                Free
                            </p>
                            <ButtonOutline>Select</ButtonOutline>
                        </div>
                    </div>
                ))}
            </div> */}
        </section>
      )
}

export default ASCSNStudentUnionsSection