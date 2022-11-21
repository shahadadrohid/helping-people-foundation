import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className="activity-style container mt-4">
            {
                activities.map(activity => <Activity key={activity._id} activity={activity}></Activity>)
            }
        </div>
    );
};

export default Activities;