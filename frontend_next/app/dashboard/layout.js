'use client';
import { usePathname } from 'next/navigation';

const Dashboard = ({children, details, responses, surveys}) => {
    const path = usePathname();
  return (
    <main  className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
        {path === '/dashboard' ? (
            <div className='flex flex-row flex-start justify-evenly p-4'>
                <div className='p-4'>{details}</div>
                <div>{responses}</div> 
                <div>{surveys}</div> 
            </div>
        ) : (
            <div>{children}</div>
        )}
    </main>
  )
}

export default Dashboard

