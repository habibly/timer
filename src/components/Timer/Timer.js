import styles from './Timer.module.css';

function Timer({ timer, id }) {
  // show countdown
  // show label if present else show the total time
  // pause timer
  // play timer

  function timeInWords(duration) {
    const hr = parseInt(duration[0]);
    const min = parseInt(duration[1]);
    const sec = parseInt(duration[2]);

    const hours = (hr !== 0 && hr === 1 && `${hr} hr` || hr > 1 && `${hr}  hrs`);
    const minutes = (min !== 0 && `${min} min`);
    const seconds = (sec !== 0 && `${sec} sec`);


    let inWords = '';
    if(hours) inWords += hours;

    if(minutes) {
      if(hours) inWords += ', ';
      inWords += minutes;
    };
    if(seconds) {
      if(hours || minutes) inWords += ', ';
      inWords += seconds;
    }; 

    return inWords;
  }
  function getLabel(timer) {
    return timer.label || timeInWords(timer.duration);
  }

  function getCountdown(timer) {
    
  }

  return (
    <div className={`${styles.timer} ${id === 0 && styles.border_top}`}>
      <div className={styles.countdown}>
        {JSON.stringify(timer)}
        <div>
          {getCountdown(timer)}
        </div>
        <span>{getLabel(timer)}</span>
      </div>
      <div className={styles.controls}>

      </div>
    </div>
  )
}
export default Timer;