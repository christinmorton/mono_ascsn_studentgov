'use client';
import Link from 'next/link'

const Item = ({item}) => {
  return (
    <Link href={item.URL} className={`w-full h-full py-2 px-2 hover:bg-content1 rounded-lg text-blue-800 hover:text-white`}>{item.Label}</Link>
  )
}

export default Item