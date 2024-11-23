import { GetSiteMenu } from '@/actions/GetSiteMenu'
import React from 'react'
import MenuItem from './MenuItem'

const ResourceLinks = async ({content}) => {
  const links = await GetSiteMenu('resource-links')
  console.log(links)
  return (
    <section className="flex flex-col w-full my-16">
      <div>
        <div className='w-full flex flex-col items-center'>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-nowrap">Download Important Information</h1>

          <div className='download-links w-3/4 flex flex-col items-start justify-evenly rounded-lg'>
            {links.MenuItems.map((item, index) => (
              <div key={index} className='w-full p-6 bg-blue-600 text-yellow-300 text-center text-2xl'>
                <MenuItem menuitem={item} />
              </div>
            ))}
          </div>
        </div>
        

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">{content.Title}</h1>

        <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">{content.MarketingLead}</p>
      </div>

    </section>
  )
}

export default ResourceLinks