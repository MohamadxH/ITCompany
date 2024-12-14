import { getSlug } from "../../../helpers/slugify";
import { getPost } from "../../../helpers/api"



export default async function Post({params}) {

    const post = await getPost(params.name);
  
  return (
    <>
<div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md">
  <iframe
    src={`https://maps.google.com/maps?q=${post.address.geo.lat},${post.address.geo.lng}&t=&z=5&ie=UTF8&iwloc=&output=embed`}
    width="80%"
    height="450"
    className="rounded-md border-2 border-gray-300 mb-6"
  />
  <h1 className="text-2xl font-bold text-gray-800 mb-2">{post.name}</h1>
  <h2 className="text-lg text-gray-600 mb-2">{post.email}</h2>
  <h3 className="text-md text-gray-500">{post.address.street}</h3>
</div>

    </>
  )
}
