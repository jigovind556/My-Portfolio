// second.js

import React, { useEffect, useState } from 'react';
import styles from './second.module.css';
import { data } from '../../info/credential';

const Second = () => {
  const elements = data.projects;
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
      <div className={styles.elements} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

        {elements.map((item, index) => (
          <div key={index} className={styles.slide}>

            {projectElement(item)}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Second;

const projectElement = (data) => {
  // console.log(data);
  return (
    <a href={data.git} target='blank'>
      <div className={styles.element}>
        <img className={styles.projectlogo} src={data.image} alt="project-icon" />
        {data.name}
      </div>
    </a>
  )
}
