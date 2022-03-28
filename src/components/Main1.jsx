import React from 'react';
import img from "../img/girl_photographer_bag_177685_1280x720.jpg";
import img1 from "../img/png-clipart-line-perpendicular-angle-line-angle-black-thumbnail.png";


const Main1 = () => {
  return (
    <aside className='aside1'>
        <div>
            <h1>Digital Marketing</h1>
            <h6>Quickly incentivize impactful action</h6>
            <h6>items before tactical collaboration and</h6>
            <h6>idea-sharing. Monotonically engage</h6>
            <h6>market-driven intellectual capital</h6>
            <h6>through wireless opportunities.</h6>
            <h6>Progressively network performance</h6>
            <h6>based services for functionalized</h6>
            <h6>testing procedures.</h6>
        </div>
        <div>
            <img src={img} />
        </div>
        <div>
            <img src={img1} className="img2" />
        </div>
    </aside>
  )
}

export default Main1
