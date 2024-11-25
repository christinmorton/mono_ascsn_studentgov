import React from 'react'

const List = ({children}) => {
  return (
    <div className='flex flex-row items-center place-content-between text-center'>
        {children}
    </div>
  )
}

export default List