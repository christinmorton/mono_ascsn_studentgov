import React from 'react'
import Image from 'next/image'

import image from '@/assets/images/logo_transparent.png'

const Logo = () => {
  return (
    <div>
        <Image src={image} alt='College of Souther Nevada Logo' width={325} />
    </div>
  )
}

export default Logo