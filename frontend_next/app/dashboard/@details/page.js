import React from 'react'

import { GetCurrentUser } from '@/actions/UserActions'

const DetailsSlot = async () => {
  const user = await GetCurrentUser();
  return (
    <div className='flex flex-col items-start justify-evenly'>
      <h4>username: {user.username}</h4>
      <h4>email: {user.email}</h4>
    </div>
  )
}

export default DetailsSlot