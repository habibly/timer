import styles from './Stage.module.css';
import { useState } from 'react';
import Header from '../Header/Header';
import NewTimer from '../NewTimer/NewTimer';
import Timer from '../Timer/Timer';

function Stage() {
  // show existing timers
  // add timer
  // delete timer
  // show new timer on initialization if no existing timers

  const [editMode, setEditMode] = useState(false);
  const [timers, setTimers] = useState([]);
  const [newTimerVisibility, setNewTimerVisibility] = useState([timers.length === 0]);

  function updateTimers(updatedTimers) {
    setTimers(updatedTimers)
  }

  function updateNewTimerVisibility(bool) {
    setNewTimerVisibility(bool)
  }

  return (
    <div className={styles.wrapper}>

      <Header totalTimers={timers.length} updateNewTimerVisibility={updateNewTimerVisibility} />

      {
        newTimerVisibility && <NewTimer timers={timers} updateTimers={updateTimers} updateNewTimerVisibility={updateNewTimerVisibility} />
      }
      
      {
        timers.length > 0 && <div className={styles.timers}> {
          timers.map((timer, i) => {
            return <Timer timer={timer} key={i} id={i} />
          })
        } </div>
      }

    </div>
  )
}


export  default Stage;