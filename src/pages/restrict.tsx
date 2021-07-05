import React from 'react'
import { useSession } from "next-auth/client"

const restrict = () => {
    const [session, loading] = useSession()
    if (session) {
        return <p>Signed in as {session.user?.email}</p>
    }else{
        return (
            <div>
                restrict page
            </div>
        )
    }
}

export default restrict
