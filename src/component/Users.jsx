import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const LodadeUsers = useLoaderData()
    const [users , setUsers] = useState(LodadeUsers);

    const handleDeleteUser = (_id) =>{
        console.log("Delete: " , _id);
        fetch(`http://localhost:5000/users/${_id}` ,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount >0){
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
                console.log(remaining)
                alert('deleted Sucessfully');
            }
        })
    }

    return (
        <div>
            <h3>All Users: {users.length}</h3>
            {
                users.map(user => <p key={user._id}>{user.name}: {user.email} 
                <button onClick={() => handleDeleteUser(user._id)}>X</button>
                <Link to={`/update/${user._id}`}>Update</Link>
                </p>)
            }
        </div>
    );
};

export default Users;