import React from 'react'
import ASCSNChildSection from './ASCSNChildSection'
import StudentGovernmentCard from './StudentGovernmentCard'

const StudentBodyGovernmentSection = ({content}) => {
    return (
        <section className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">Student Government</h1>
    
            <p className="my-2 text-black-500">{content.Title}</p>

            <div className='flex flex-row'>
                <div>
                    <StudentGovernmentCard member={content.president} />
                </div>
                <div>
                    <StudentGovernmentCard member={content.vice_president} />
                </div>
            </div>

            <div className='flex flex-row'>
                <div>
                    <StudentGovernmentCard member={content.treasurer} />
                </div>
                <div>
                    <StudentGovernmentCard member={content.secretary} />
                </div>
            </div>

            <div className='flex flex-col'>
                <h1>{content.charleston_campus_senators[0].title}</h1>
                <div className='flex flex-row'>
                    {content.charleston_campus_senators.map((senator, index) => (
                        <div key={index}>
                            <StudentGovernmentCard key={index} member={senator} noTitle={false} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col'>
                <h1>{content.extension_site_senators[0].title}</h1>
                <div className='flex flex-row'>
                    {content.extension_site_senators.map((senator, index) => (
                        <div key={index}>
                            <StudentGovernmentCard key={index} member={senator} noTitle={false} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col'>
                <h1>{content.henderson_campus_senators[0].title}</h1>
                <div className='flex flex-row'>
                    {content.henderson_campus_senators.map((senator, index) => (
                        <div key={index}>
                            <StudentGovernmentCard key={index} member={senator} noTitle={false} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col'>
                <h1>{content.north_las_vegas_campus_senators[0].title}</h1>
                <div className='flex flex-row'>
                    {content.north_las_vegas_campus_senators.map((senator, index) => (
                        <div key={index}>
                            <StudentGovernmentCard key={index} member={senator} noTitle={false} />
                        </div>
                    ))}
                </div>
            </div>


            {/* {content.ChildSection.map((section, index) => (
                // <ASCSNChildSection key={index} child={section} />
                <StudentGovernmentCard key={index} member={section} />
            ))} */}
        </section>
      )
}

export default StudentBodyGovernmentSection