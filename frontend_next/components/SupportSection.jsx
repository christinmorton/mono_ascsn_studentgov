import Image from 'next/image'
import React from 'react'

import amazon from '@/assets/vendor_assets/template_1/Icon/amazon.png'
import netflix from '@/assets/vendor_assets/template_1/Icon/netflix.png'
import reddit from '@/assets/vendor_assets/template_1/Icon/reddit.png'
import discord from '@/assets/vendor_assets/template_1/Icon/discord.png'
import spotify from '@/assets/vendor_assets/template_1/Icon/spotify.png'

const SupportSection = ({content}) => {
    return (
        <section className="flex flex-col w-full my-16">
            <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">{content.Title}</h1>
    
                <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">{content.MarketingLead}</p>
            </div>

            <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" >
              {/* <Netflix className="h-18 w-auto" /> */}
              <Image
                src={amazon}
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <Image
                src={netflix}
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <Image
                src={reddit}
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <Image
                src={discord}
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <Image
                src={spotify}
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </div>
        </section>
      )
}

export default SupportSection