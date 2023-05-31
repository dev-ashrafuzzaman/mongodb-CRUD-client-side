import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const LodadeUsers = useLoaderData();
    console.log(LodadeUsers.name)
    const handleUpdate = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const updateUser = {name , email}
        console.log(updateUser)

        fetch(`http://localhost:5000/users/${LodadeUsers._id}`, {
            method: "PUT",
            headers: {
            'content-type' : 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then (res => res.json())
        .then (data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('User Updated Sucessfull')
            }
        })

    }
    return (
        <div>
                <h2>Update User :{LodadeUsers.name} </h2>
                <form onSubmit={handleUpdate} >
                    <input type="text" name='name' defaultValue={LodadeUsers?.name} />
                    <input type="email" name='email' defaultValue={LodadeUsers?.email} />
                    <input type="submit" value="Update Users" />
                </form>
        </div>
    );
};

export default Update;