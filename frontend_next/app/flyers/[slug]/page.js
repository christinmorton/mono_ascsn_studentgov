import { GetFlyerById } from "@/actions/GetFlyers"


const FlyerBySlug = async ({params}) => {
  const flyer = await GetFlyerById(params.slug)
  console.log(flyer)
  return (
    <main>
        <h1>{flyer.Title}</h1>
        <h1>{flyer.Type}</h1>
    </main>
  )
}

export default FlyerBySlug