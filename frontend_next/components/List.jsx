import React from 'react'

const List = ({children}) => {
  return (
    <div className='flex flex-row items-center'>
        {children}
    </div>
  )
}

export default List