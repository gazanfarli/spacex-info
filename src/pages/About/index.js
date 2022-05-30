import React from 'react';
import "./index.css";

function About() {
  return (
    <div className='about'>
        <div className='about_article'>
            <h1>ABOUT</h1>
            <p>
                This website is a fun project from <a href="https://www.spacex.com/">SpaceX</a> fan for <a href="https://www.spacex.com/">SpaceX</a> fans. Website provides countdown timer for next launch as well as information about previous, upcoming launches and also information about SpaceX vehicles such as rockets.
            </p>
            <p>
                This website was developed and is maintained by <a href="https://github.com/gazanfarli">Gazanfar Gazanfarli</a>. Data for this site is provided by <a href="https://github.com/r-spacex/SpaceX-API">SpaceX-API</a>. If you are interested in source code, check my github page.
            </p>
            <p>
                The creator of this website has no affiliation with <a href="https://www.spacex.com/">SpaceX</a>. The content on the website is for educational purposes only. Photos used on this website are property of SpaceX and can be found on the <a href="https://www.flickr.com/photos/spacex/">SpaceX Flickr</a>.
            </p>
        </div>
    </div>
  )
}

export default About;