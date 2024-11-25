'use client'
import Link from "next/link"

const SmallEventsCard = ({event, bgColor}) => {
  return (
    <div className={`w-[225px] flex flex-col p-6 bg-[#004890] rounded-lg`}>
        <h4 className="text-2xl  text-yellow-300">{event.Title}</h4>
        <h6 className="text-white">{event.EventHost}</h6>
        <Link href={`/events/${event.documentId}`}><span className="my-2 pb-8 text-yellow-400">Learn More</span></Link>
    </div>
  )
}

export default SmallEventsCard