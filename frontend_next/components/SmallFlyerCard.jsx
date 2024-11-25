import Link from "next/link"

const SmallFlyerCard = ({flyer}) => {
  return (
    <div className={`w-[225px] flex flex-col p-6 bg-yellow-200 rounded-lg`}>
        <h4 className="text-2xl text-[#004890]">{flyer.Title}</h4>
        <h6 className="text-gray-500">{flyer.Type}</h6>
        <Link href={`/flyers/${flyer.documentId}`}><span className="my-2 pb-8 text-[#004890]">Learn More</span></Link>
    </div>
  )
}

export default SmallFlyerCard