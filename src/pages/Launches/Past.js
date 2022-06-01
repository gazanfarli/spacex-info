import React, { useEffect, useState } from 'react';
import "./index.css";
import UpcomingItem from "../../components/UpcomingLaunches/UpcomingItem";

function Past() {
    const [pastLaunches, setPastLaunches] = useState();

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/launches/past`)
            .then((res) => res.json())
            .then((data) => {
                setPastLaunches(data);
            })
            .catch((err) => console.log(err));
    }, [])

  return (
    <div className='past'>
        {
            pastLaunches && 
            pastLaunches.slice(pastLaunches.length - 10, pastLaunches.length).reverse().map(item => {
                return <UpcomingItem upcoming_item={item} key={item.id} isUpcoming={false} />
            })
        }
    </div>
  )
}

export default Past