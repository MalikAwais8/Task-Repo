import { useEffect , useState } from "react";
import React from 'react';

function Users(){

    const [users , setUsers] = useState([{
        name: "",
        email : "",
        password : " "
    }])

    useEffect(()=>{
        fetch("/myusers").then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setUsers(jsonRes))
    })

return <div className='container'>
    <h1>Users</h1>
    {users.map(user => 
    <div>
    <h1>{user.name}</h1>
    <h1>{user.email}</h1>
    <h1>{user.password}</h1>
</div>

    )}
</div>
}

export default Users;