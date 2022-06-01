import React, { useEffect, useState } from 'react';
import UpcomingItem from "../../components/UpcomingLaunches/UpcomingItem";

function Upcomings() {
  const [upcomings, setUpcomings] = useState();
  
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/upcoming")
    .then(res => res.json())
    .then(data => setUpcomings(data))
    .catch(err => console.log(err));
  },[])
  
  return (
    <div className='upcomings'>
      {
        upcomings && 
        upcomings.map(item => {
          return <UpcomingItem upcoming_item={item} key={item.id} isUpcoming={true} />
        })
      }
    </div>
  )
}

export default Upcomings;