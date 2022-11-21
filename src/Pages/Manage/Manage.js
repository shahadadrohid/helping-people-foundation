import React from 'react';

const Manage = () => {
    const handleManage = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.image.value;
        const user = { name, img };
        console.log(user)
        fetch('http://localhost:5000/activities', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h2>Manage Activity</h2>
            <form onSubmit={handleManage} className="w-50 mx-auto" action="">
                <input className="w-50 mx-auto mt-2" name="name" type="text" placeholder='Activity Name' />
                <br />
                <input className="w-50 mx-auto mt-2" name="image" type="text" placeholder='Image Link' />
                <br />
                <input className="w-50 mx-auto mt-2 btn btn-primary rounded" type="submit" value="New Activity" />
            </form>
        </div>
    );
};

export default Manage;