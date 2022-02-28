import React from 'react';
import '../gallery.css';

import img1 from '../Images/img-1.jpeg';
import img2 from '../Images/img-2.jpeg';
import img3 from '../Images/img-3.jpeg';
import img4 from '../Images/img-4.jpeg';
import img5 from '../Images/img-5.jpeg';
import img6 from '../Images/img-6.jpeg';
import img7 from '../Images/img-7.jpeg';
import img8 from '../Images/img-8.jpeg';
import img9 from '../Images/img-9.jpeg';
import img10 from '../Images/img-10.jpeg';
import img11 from '../Images/img-11.jpeg';
import img12 from '../Images/img-12.jpeg';
import img13 from '../Images/img-13.jpg';
import img14 from '../Images/img-14.jpeg';
import img15 from '../Images/img-15.jpeg';
function Gallery() {

  let data = [
    {
      id : 1,
      imgsrc : img8,
    },
    {
      id : 2,
      imgsrc : img2,
    },
    {
      id : 3,
      imgsrc : img3,
    },
    {
      id : 4,
      imgsrc : img4,
    },
    {
      id : 5,
      imgsrc : img5
    },
    {
      id : 6,
      imgsrc : img6
    },
    {
      id : 7,
      imgsrc : img7
    },
    {
      id : 8,
      imgsrc : img1
    },
    {
      id : 9,
      imgsrc : img9
    },
    {
      id : 10,
      imgsrc : img10
    },
    {
      id : 11,
      imgsrc : img11
    },
    {
      id : 12,
      imgsrc : img12
    },
    {
      id : 13,
      imgsrc : img13
    },
    {
      id : 14,
      imgsrc : img14
    },
    {
      id : 15,
      imgsrc : img15
    },

  ]

  return (
    <div className="gallery">
      {data.map((item) => {
        return (
          <div className="pics" key={item.id} >
            <img src={item.imgsrc} alt ="images" style={{width : '100%'}}/>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery