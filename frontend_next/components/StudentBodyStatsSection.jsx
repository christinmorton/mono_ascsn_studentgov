import React from 'react'

import iconUser from '@/assets/vendor_assets/template_1/Icon/heroicons_sm-user_csn.svg'
import iconLocation from '@/assets/vendor_assets/template_1/Icon/gridicons_location_csn.svg'
import iconServer from '@/assets/vendor_assets/template_1/Icon/bx_bxs-server.svg'
import Image from 'next/image'


const StudentBodyStatsSection = () => {
    const listUser = [
        {
          name: "Students",
          number: "5000",
          icon: iconUser,
        },
        {
          name: "Locations",
          number: "7",
          icon: iconLocation,
        },
        {
          name: "Elected Members",
          number: "18",
          icon: iconUser,
        },
      ]
  return (
    <div className="relative w-full flex">
        <div
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
            //   variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-blue-600 w-12 h-12 mr-6 rounded-full">
                  <Image src={listUsers.icon} className="h-6 w-6" alt='icon image of a user' />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
       </div>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
  )
}

export default StudentBodyStatsSection