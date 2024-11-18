'use client'
import Link from "next/link"

const SmallEventsCard = ({event}) => {
  return (
    <div>
        <h4>{event.Title}</h4>
        <h6>{event.EventHost}</h6>
        <Link href={`/events/${event.documentId}`}>Learn More</Link>
    </div>
  )
}

export default SmallEventsCard