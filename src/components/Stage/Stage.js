import styles from './Stage.module.css';
import { useState } from 'react';
import Header from '../Header/Header';
import NewTimer from '../NewTimer/NewTimer';


function Stage() {
  // show existing timers
  // add timer
  // delete timer
  // show new timer on initialization if no existing timers

  const [editMode, setEditMode] = useState(false);
  const [timers, setTimers] = useState([]);

  return (
    <div className={styles.wrapper}>
      <Header totalTimers={timers.length} />
      <NewTimer timers={timers} setTimers={setTimers} />
    </div>
  )
}


export  default Stage;