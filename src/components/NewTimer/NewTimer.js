import { useState } from 'react';
import styles from './NewTimer.module.css';

function CountDown() {
  const [hrs, setHrs] = useState('00');
  const [min, setMin] = useState('00');
  const [sec, setSec] = useState('00');


  function handleChange(e) {

    const unit = e.target.name;
    const value = e.target.value;


    function conactLastChar(curr, next) {
      return `${curr.split('')[curr.length - 1].concat(next.split('')[next.length - 1])}`;
    }


    switch (unit) {
      case 'hh':
        if(parseInt(value) <= 23) {
          setHrs(conactLastChar(hrs, value))
        }
        break;

      case 'mm':
        if(parseInt(value) <= 59) {
          setMin(conactLastChar(min, value))
        }
        break;
      
      case 'ss':
        if(parseInt(value) <= 59) {
          setSec(conactLastChar(sec, value))
        }
        break;
      
      default:
        break;
    }
  }

  function handleScroll(e) {
    
  }

  return (
    <div className={styles.countdown}>
      <div className={styles.unit}>
        <input onChange={handleChange} onScroll={handleScroll} onClick={e => e.target.select()} id='hh' type='number' value={hrs} name='hh' />
        <label htmlFor="hh">hrs</label>
      </div>
      <div className={styles.unit}>
        <input onChange={handleChange} onScroll={handleScroll} onClick={e => e.target.select()} id='mm' type='number' value={min} name='mm' />
        <label htmlFor="mm">min</label>
      </div>
      <div className={styles.unit}>
        <input onChange={handleChange} onScroll={handleScroll} onClick={e => e.target.select()} id='ss' type='number' value={sec} name='ss' />
        <label htmlFor="ss">sec</label>
      </div>
    </div>
  )
}

function NewTimer() {
  // set hours, minutes, and seconds
  // set label 
  // set sound for when timer ends 
  // start new timer
  // close new timer screen
  return (
    <CountDown />
  )
}


export default NewTimer;