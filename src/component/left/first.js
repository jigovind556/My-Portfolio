import React, { useState, useEffect } from 'react';

const ChangingCharacteristics = () => {
  const [characteristics, setCharacteristics] = useState([
    'Passionate Programmer',
    'Web Dev Enthusiast',
    'Mobile App Developer',
    'Analytical Problem Solver',
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % characteristics.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [index, characteristics]);

  return (
    <div style={styles.container}>
      <div style={styles.characteristicsContainer}>
        <h5 style={styles.name}>Govind Ji</h5>
        <p style={styles.characteristic}>{characteristics[index]}</p>
      </div>
    </div>
  );
};

const styles = {
  // container: {
  //   // position: 'fixed',
  //   top: 20,
  //   right: 20,
  //   // backgroundColor: '#f0f0f0',
  //   padding: 10,
  //   borderRadius: 8,
  //   boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  // },
  characteristicsContainer: {
    textAlign: 'center',
  },
  name: {
    margin: 0,
    fontSize: '1.5em',
  },
  characteristic: {
    margin: 0,
    fontSize: '1.2em',
    opacity: 0.8,
    transition: 'opacity 0.5s ease-in-out',
    color : "white"
  },
};

export default ChangingCharacteristics;
