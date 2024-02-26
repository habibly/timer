import { useState } from 'react';
import styles from './NewTimer.module.css';

function CountDown({newTimer, updateNewTimer}) {
  const [hrs, setHrs] = useState(newTimer.duration[0]);
  const [min, setMin] = useState(newTimer.duration[1]);
  const [sec, setSec] = useState(newTimer.duration[2]);


  function handleChange(e) {

    const unit = e.target.name;
    const value = e.target.value;

    const updatedNewTimer = Object.assign({}, newTimer)

    function conactLastChar(curr, next) {
      return `${curr.split('')[curr.length - 1].concat(next.split('')[next.length - 1])}`;
    }


    switch (unit) {
      case 'hh':
        setHrs(conactLastChar(hrs, value))
        updatedNewTimer.duration = [conactLastChar(hrs, value), min, sec]
        updateNewTimer(updatedNewTimer)
        break;

      case 'mm':
        setMin(conactLastChar(min, value))
        updatedNewTimer.duration = [hrs, conactLastChar(min, value), sec]
        updateNewTimer(updatedNewTimer)
        break;
      
      case 'ss':
        setSec(conactLastChar(sec, value))
        updatedNewTimer.duration = [hrs, min, conactLastChar(sec, value)]
        updateNewTimer(updatedNewTimer)
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

function Label({ newTimer, updateNewTimer}) {
  const [label, setLabel] = useState('');
  const updatedNewTimer = Object.assign({}, newTimer)

  function handleChange(e) {
    setLabel(e.target.value)
    updatedNewTimer.label = e.target.value;
    updateNewTimer(updatedNewTimer);
  }

  return (
    <div className={styles.timer_label}>
      <label htmlFor="time_label">Label</label>
      <input onChange={handleChange} id="time_label" type="text" value={label} name="time_label" placeholder="Timer" />
    </div>
  )
}

function AlarmRingtone({ newTimer, updateNewTimer}) {
  const ringtonesList = newTimer.ringtones.list;
  const defaultRingtone = newTimer.ringtones.selected;
  const updatedNewTimer = Object.assign({}, newTimer);
  const [ringtone, setRingtone] = useState(defaultRingtone);

  function handleChange(e) {
    setRingtone(e.target.value);
    updatedNewTimer.ringtones.selected = e.target.value;
    updateNewTimer(updatedNewTimer);
  }
  

  return (
    <div className={styles.alarm_ringtone}>
      <label htmlFor="ringtones">Alarm ringtone</label>
      <select onChange={handleChange}  id="ringtones">
      {ringtonesList.map((option, i) => {
        return <option key={i} value={option}>{option}</option>
      })}
      </select>
    </div>
  )
}

function Controls({newTimer, timers, updateTimers}) {

  function handleCancel(e) {
    console.log(e)
  }

  function handleStart(e) {

    // copy exisitng entries in new array
    const updatedTimers = [];
    timers.forEach(entries => {
      updatedTimers.push(entries)
    })


    updatedTimers.push(newTimer);


    updateTimers(updatedTimers)
  }

  return (
    <div className={styles.controls}>
      <button className={styles.cancel} onClick={handleCancel} disabled={timers.length === 0}>Cancel</button>
      <button className={styles.start} onClick={handleStart}>Start</button>
    </div>
  )
}
function NewTimer({ timers, updateTimers}) {
  // set hours, minutes, and seconds
  // set label 
  // set sound for when timer ends 
  // start new timer
  // close new timer screen
  const [newTimer, setNewTimer] = useState({
    duration: ['00', '05', '00'],
    label: "",
    ringtones: {
      list: ["Bells", "Wind Chime"],
      selected: "Bells"
    },
  });

  function updateNewTimer(updatedNewTimer) {
    setNewTimer(updatedNewTimer);
  }

  return (
    <div className={styles.new_timer_wrapper}>
      <CountDown newTimer={newTimer} updateNewTimer={updateNewTimer} />
      <Label newTimer={newTimer} updateNewTimer={updateNewTimer} />
      <AlarmRingtone newTimer={newTimer} updateNewTimer={updateNewTimer} />
      <Controls newTimer={newTimer} updateNewTimer={updateNewTimer} timers={timers} updateTimers={updateTimers} />
    </div>
  )
}


export default NewTimer;