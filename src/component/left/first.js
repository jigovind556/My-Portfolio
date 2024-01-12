import React, { useState, useEffect, useRef } from 'react';
import styles from "./first.module.css";

const ChangingCharacteristics = () => {
  const [i,seti]=useState(0);
  const [j,setj]=useState(0);
  const txt = [
    'Passionate Programmer',
    'Web Dev Enthusiast',
    'Mobile App Developer',
    'Analytical Problem Solver',
  ];
  const end= useRef(false);
  
  function wait(seconds) {    
    return new Promise((resolve,reject) => {
      setTimeout( ()=>{
        resolve();
      }, seconds * 1000);
    });
  }

  const func= async () =>{
    const m=txt.length;
    const n=txt[i].length;
    if(j===n ){
      end.current=true;
      await wait(2);
    }
    else {
      await wait (0.1);
    }

    if(i<m){
      if(end.current===true && j>=0){
        if(j===0){
          await wait(1);
          end.current=false;
          if(i===m-1){
            seti(0);
          }
          else {
            seti(prev=>prev+1);
          }
          
        }
        else {
          setj((prev)=>prev-1);
        }
      }
      if(end.current===false && j<n){
        setj((prev)=>prev+1);
        
        
      }
    }
    else {
      seti(0);
      setj(0);
      end.current=false;
    }
  }
  useEffect(()=>{
    func();


  },[i,j]);


  return (
    <div className={styles.container}>
      <div className={styles.characteristicsContainer}>
        <h5 className={styles.name}>Govind Ji</h5>
        <p className={styles.characteristic}><span id='typed' className={styles.typingChars}>{txt[i].substring(0,j)}</span></p>
        {/* <p className={styles.characteristic}>{characteristics[index]}</p> */}
      </div>
    </div>
  );
};


export default ChangingCharacteristics;
