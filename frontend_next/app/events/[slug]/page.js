import { GetEventById } from "@/actions/EventActions"
import { convertTo12Hour } from "@/utils/helpers"

const EventBySlug = async ({params}) => {
  const event = await GetEventById(params.slug)
  console.log(event)
  return (
    <main>
        <h1>{event.Title}</h1> 
        <h1>Host: {event.EventHost}</h1> 
        <p>{event.Description}</p> 
        <p>Event Type: {event.EventDates.Event} event</p>
        {event.ascsn_event ? (<p>ASCSN Event</p>) : (null)}
        <p>{event.EventDates.StartDate} - {event.EventDates.EndDate}</p>
        <p>Start time: {convertTo12Hour(event.EventDates.StartTime)} - End time: {convertTo12Hour(event.EventDates.StartTime)}</p>
    </main>
  )
}

export default EventBySlug