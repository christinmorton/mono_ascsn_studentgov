import { GetCurrentStudent } from '@/actions/StudentActions'
import { GetCurrentUser } from '@/actions/UserActions'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

import { Logout } from '@/actions/Auth'

const UserMenu = async () => {
    const user = await GetCurrentUser();

    if(!user) return null;

    console.log(user)
    const student = await GetCurrentStudent();
  return (
    <div>
        {user && (
          <div>
            {/* {student && <div>*/}
                <Link href={'/dashboard'}>dashboard</Link>
                <Link href={'/surveys'}>surveys</Link>
                <Link href={'/student-clubs/feed'}>my feed</Link>
                <Link href={'/student-clubs/join'}>join</Link>
                <button onClick={Logout}>logout</button>
            {/*</div>} */}
          </div>
        )}
        {/* {!student && <div>
                <div>
                    <p>You have not configured your student access yet. <Link href={'/dashboard/configure'}>Please click here</Link></p>
                </div>
            </div>} */}
    </div>
  )
}

export default UserMenu