import { GetAllEvents } from '@/actions/EventActions' 

import MenuList from '@/components/MenuList'
import SmallEventsCard from '@/components/SmallEventsCard'
import SmallFlyerCard from '@/components/SmallFlyerCard'
import React from 'react'


const EventsHub = async () => {
  const events = await GetAllEvents();
  console.log(events)
    return (
    <main className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal py-4">ASCSN Events</h1>

            <h2 className=''>Current events created by ASCSN and the Student Government.</h2>

            <p className="w-[625px] my-2 pb-8 text-black-500 text-center">The ASCSN and Student Government, in partnership with college departments and student clubs, bring a variety of events to life on campus. From workshops to cultural celebrations, these events foster community and growth. Students are encouraged to join, participate, and make the most of these opportunities.<br /> <br />Approved events reflect our mission to support student life and engagement. Be sure to check this section regularly for the latest updates and exciting activities. Together, we create a vibrant and inclusive campus experience.</p>
        </div>

        <div className="w-full flex flex-col items-start bg-yellow-200 rounded-xl text-blue-600 p-6">
            <h4 className="text-xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal pt-6">ASCSN Flyer Boards</h4>
            <div className='w-full flex flex-row'>
                <div className='w-[30%] flex flex-col p-6'>
                    <h2 className="text-2xl my-2 pb-8 text-black-500">Filters</h2>
                    <hr />
                    <p className="my-2 pb-8 text-black-500">Flyer type</p>
                    {/* <p className="my-2 pb-8 text-black-500">Date</p>
                    <p className="my-2 pb-8 text-black-500">CSN</p>
                    <p className="my-2 pb-8 text-black-500">ASCSN</p>
                    <p className="my-2 pb-8 text-black-500">Student Government</p>
                    <p className="my-2 pb-8 text-black-500">Student</p>
                    <p className="my-2 pb-8 text-black-500">Government</p>
                    <p className="my-2 pb-8 text-black-500">Advertiser</p> */}
                </div>
                
                <div className='w-[70%] flex flex-row flex-wrap justify-start gap-4 p-2'>
                    {events.map((item, index) => (
                        <SmallEventsCard key={index} event={item} />
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}

export default EventsHub