import Image from "next/image"

import { GetFlyerById } from "@/actions/GetFlyers"

import img from "@/assets/images/Charleston_StudentUnion.webp"

const FlyerBySlug = async ({params}) => {
  const flyer = await GetFlyerById(params.slug)
  console.log(flyer)
  return (
    <main className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
        <div className="flex flex-col p-4 bg-yellow-300 rounded-xl text-yellow-300 py-24 my-24">
          <div className='flex flex-col items-center justify-center p-10'>
            <h1 className="text-2xl text-blue-600">{flyer.Title}</h1> 
            <h1 className="text-2xl text-white">Type: {flyer.Type}</h1> 
          </div>  

          <div className="h-full w-full p-4">
            <Image src={img} alt='a simple test image' layout="responsive"
              quality={100}
              height={414}
              width={508} />
          </div>
        </div>
    </main>
  )
}

export default FlyerBySlug