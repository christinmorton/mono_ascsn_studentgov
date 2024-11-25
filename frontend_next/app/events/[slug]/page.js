import Image from "next/image"

import { GetEventById } from "@/actions/EventActions"
import { convertTo12Hour } from "@/utils/helpers"

import img from "@/assets/images/Charleston_StudentUnion.webp"

const EventBySlug = async ({params}) => {
  const event = await GetEventById(params.slug)
  return (
    <main className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
        <div className="flex flex-row p-4 bg-blue-600 rounded-xl text-yellow-300 py-24 my-24">
          <div className="h-full w-full p-4">
            <Image src={img} alt='a simple test image' layout="responsive"
              quality={100}
              height={414}
              width={508} />
          </div>

          <div className="flex flex-col justify-evenly">
            <div className='flex flex-col items-center justify-center p-10'>
              <h1 className="text-2xl  text-yellow-300">{event.Title}</h1> 
              <h1 className="text-2xl  text-white">Host: {event.EventHost}</h1> 
              <p className="w-[525px] text-white">{event.Description}</p> 
              <p className="text-white pt-8">Event Type: {event.EventDates.Event} event</p>
            </div>  

            <div className='flex flex-col items-center justify-center'>
              {event.ascsn_event ? (<p className="text-yellow-300">ASCSN Event</p>) : (null)}
              <p className="text-white">{event.EventDates.StartDate} - {event.EventDates.EndDate}</p>
              <p className="text-white">Start time: {convertTo12Hour(event.EventDates.StartTime)} - End time: {convertTo12Hour(event.EventDates.StartTime)}</p>
            </div>
          </div>
        </div>
    </main>
  )
}

export default EventBySlug