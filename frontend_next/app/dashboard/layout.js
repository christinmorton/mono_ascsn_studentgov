'use client';
import { usePathname } from 'next/navigation';

const Dashboard = ({children, details, responses, surveys}) => {
    const path = usePathname();
  return (
    <div>
        {path === '/dashboard' ? (
            <div className='flex flex-row flex-start justify-evenly p-4'>
                <div className='p-4'>{details}</div>
                <div>{responses}</div> 
                <div>{surveys}</div> 
            </div>
        ) : (
            <div>{children}</div>
        )}
    </div>
  )
}

export default Dashboard

