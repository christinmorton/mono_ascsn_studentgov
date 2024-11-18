import { GetAllEvents } from '@/actions/EventActions' 

import MenuList from '@/components/MenuList'
import SmallEventsCard from '@/components/SmallEventsCard'
import SmallFlyerCard from '@/components/SmallFlyerCard'
import React from 'react'


const EventsHub = async () => {
  const events = await GetAllEvents();
  console.log(events)
    return (
    <main>
        <h1>Currently approved flyers for ASCSN Flyer Boards</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum dui et mi convallis porta. Proin sit amet tristique tortor. Curabitur maximus, purus a tincidunt porttitor, libero neque tempus dui, sit amet varius neque ligula at risus. Pellentesque mollis bibendum eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et commodo est. Maecenas molestie justo erat, elementum sodales ipsum eleifend vitae.</p>

        <div>
            <h4>Flyers List</h4>
            <div className='flex flex-row items-center justify-start'>
                <div>
                    <h4>Filters</h4>
                    <hr />
                    <p>Date</p>
                    <p>size</p>
                    <p>Advertiser</p>
                </div>
                
                <div className='flex flex-row'>
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