import React, { useEffect, useState } from "react";
import "../index.css";
import UpcomingItem from "../../../components/UpcomingLaunches/UpcomingItem";
import axios from "axios";
import ScrollToTop from "../../../components/ScrollToTop";

function Past() {
  const [pastLaunches, setPastLaunches] = useState();
  const [click, setClick] = useState(false);

  const onClickHandler = () => {
    setClick(!click);
  };

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/launches/past`)
      .then((res) => {
        setPastLaunches(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  pastLaunches && console.log([pastLaunches.reverse()]);

  return (
    <div className="past">
      {pastLaunches && click
        ? pastLaunches.reverse().map((item) => {
            return (
              <div key={item.id}>
                <UpcomingItem
                  upcoming_item={item}
                  isUpcoming={false}
                />
                <ScrollToTop />
              </div>
            );
          })
        : pastLaunches &&
          pastLaunches
            .slice(pastLaunches.length - 10, pastLaunches.length)
            .reverse()
            .map((item) => {
              return (
                <UpcomingItem
                  upcoming_item={item}
                  key={item.id}
                  isUpcoming={false}
                />
              );
            })}
      {click ? (
        <button className="button" onClick={onClickHandler}>
          SHOW LESS
        </button>
      ) : (
        <button className="button" onClick={onClickHandler}>
          SHOW MORE
        </button>
      )}
    </div>
  );
}

export default Past;
