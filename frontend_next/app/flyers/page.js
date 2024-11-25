import { GetAllFlyers } from '@/actions/GetFlyers'

import MenuList from '@/components/MenuList'
import SmallFlyerCard from '@/components/SmallFlyerCard'
import React from 'react'

const FlyersHub = async () => {
  const flyers = await GetAllFlyers();
    return (
        <main className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
        <div className='flex flex-col items-center'>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal py-4">ASCSN Flyer Boards</h1>

            <h2 className=''>Currently approved flyers for flyer boards.</h2>

            <p className="w-[550px] my-2 pb-8 text-black-500">Students, departments, and local businesses can share approved flyers on campus boards. These boards are a space for promoting events, services, and opportunities. Ensure all flyers meet our guidelines and are submitted for review. Proper posting helps maintain fairness and visibility. Thank you for your cooperation in keeping our boards vibrant and engaging.</p>
        </div>

        <div className="w-full flex flex-col items-start bg-[#004890] rounded-xl text-blue-600 p-6">
            <h4 className="text-xl lg:text-3xl xl:text-4xl font-medium text-white leading-normal pt-6">ASCSN Flyer Boards</h4>
            <div className='w-full flex flex-row'>
                <div className='w-[30%] flex flex-col p-6'>
                    <h2 className="text-2xl my-2 pb-8 text-white">Filters</h2>
                    <hr />
                    <p className="my-2 pb-8 text-white">Flyer type</p>
                    {/* <p className="my-2 pb-8 text-black-500">Date</p>
                    <p className="my-2 pb-8 text-black-500">CSN</p>
                    <p className="my-2 pb-8 text-black-500">ASCSN</p>
                    <p className="my-2 pb-8 text-black-500">Student Government</p>
                    <p className="my-2 pb-8 text-black-500">Student</p>
                    <p className="my-2 pb-8 text-black-500">Government</p>
                    <p className="my-2 pb-8 text-black-500">Advertiser</p> */}
                </div>
                
                <div className='w-[70%] flex flex-row flex-wrap justify-start gap-4 p-2'>
                    {flyers.map((item, index) => (
                        <SmallFlyerCard key={index} flyer={item} />
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}

export default FlyersHub