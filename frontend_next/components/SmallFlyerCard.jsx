import Link from "next/link"

const SmallFlyerCard = ({flyer}) => {
  return (
    <div>
        <h4>{flyer.Title}</h4>
        <h6>{flyer.Type}</h6>
        <Link href={`/flyers/${flyer.documentId}`}>Learn More</Link>
    </div>
  )
}

export default SmallFlyerCard