import React from 'react'
import img1 from "../img/pexelsphoto305241.png";

const Main = () => {
  return (
    <main>
      <div className='main-header'>
       <div>
        <h2>About harness multimedia</h2>
        <h2>based collaboration.</h2>
        <h6 style={{marginTop:30}}>Quickly incentivize impactful action items before tactical</h6>
        <h6>collaboration and idea-sharing. Monotonically engage market-</h6>
        <h6>driven intellectual capital through wireless opportunities.</h6>
        <h6>Progressively network performance based services for</h6>
        <h6>functionalized testing procedures.</h6>
      </div>
      <div className='img-div'>
          <img src={img1} />
      </div>
     </div>
      <div className='bloks'>
          <div>
              <h1>01</h1>
              <h5>Schematic Design</h5>
              <h6 style={{marginTop:20}}>Sed ut perspiciatis unde omnis iste</h6>
              <h6>natus error sit voluptatem</h6>
              <h6>accusantium doloremque</h6>
              <h6>laudantium</h6>
          </div>
          <div id='yellow'>
              <h1>02</h1>
              <h5>Construction Documents</h5>
              <h6 style={{marginTop:20}}>Sed ut perspiciatis unde omnis iste</h6>
              <h6>natus error sit voluptatem</h6>
              <h6>accusantium doloremque</h6>
              <h6>laudantium</h6>
          </div>
          <div id='black'>
              <h1>03</h1>
              <h5>Construction</h5>
              <h6 style={{marginTop:20}}>Sed ut perspiciatis unde omnis iste</h6>
              <h6>natus error sit voluptatem</h6>
              <h6>accusantium doloremque</h6>
              <h6>laudantium</h6>
          </div>
          <div id='grey'>
              <h1>04</h1>
              <h5>Build Construction</h5>
              <h6 style={{marginTop:20}}>Sed ut perspiciatis unde omnis iste</h6>
              <h6>natus error sit voluptatem</h6>
              <h6>accusantium doloremque</h6>
              <h6>laudantium</h6>
          </div>
      </div>
    </main>
  )
}

export default Main
