import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams,setSearchParams]=useSearchParams();
    const showActiverUsers=searchParams.get('filter') === 'active'
  return (
    <div>
        <h1>Users</h1>
        <button onClick={()=>setSearchParams({filter:"active"})}>Active users</button>
        <button onClick={()=>setSearchParams({})}>Reset filter</button>
        <h1>{showActiverUsers ? 'Showing activer users' : 'all users'}</h1>
    </div>
  )
}

export default Users