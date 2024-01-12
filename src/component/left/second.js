// second.js

import React, { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import styles from './second.module.css';

const Second = () => {
  const elements = ['first', 'second', 'third', 'fourth'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, 3000); // Change the interval to 3000ms for the animation to complete

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>projects</div>
      <div className={styles.elements}>
      <Slider autoplay={3000}>
        {elements.map((item, index) => (
          // <div
          //   key={index}
          //   style={{ background: `url('${item.image}') no-repeat center center` }}
          // >
            <div className="center">
              {item}
              {/* <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button> */}
            </div>
          // </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Second;

const projectElement=(data)=>{
  return(
    <div className={styles.element}>
      {data}
    </div>
  )
}
