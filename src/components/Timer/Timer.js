import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

function Timer({ timer, id }) {

    const initialCountdown = timer.duration.slice().map(Number);
    const [countdown, setCountdown] = useState(initialCountdown);

    function timeInWords(countdown) {
      const [hr, min, sec] = countdown.map(Number);
  
      const hours = hr !== 0 && `${hr} hr${hr > 1 ? 's' : ''}`;
      const minutes = min !== 0 && `${min} min`;
      const seconds = sec !== 0 && `${sec} sec`;

      const parts = [hours, minutes, seconds].filter(Boolean);
  
      return parts.join(', ');
    }
  

    useEffect(() => {
        const speedFactor = 1; // for testing
        const intervalDuration = 1000 / speedFactor;

        const interval = setInterval(() => {
            setCountdown(prevCountdown => {
                let [prevHours, prevMin, prevSec] = prevCountdown;
                let totalMilliseconds = (prevHours * 3600 + prevMin * 60 + prevSec) * 1000;
                totalMilliseconds -= intervalDuration;

                let newHours = Math.floor(totalMilliseconds / (3600 * 1000));
                let newMin = Math.floor((totalMilliseconds % (3600 * 1000)) / (60 * 1000));
                let newSec = Math.floor((totalMilliseconds % (60 * 1000)) / 1000);

                if (newSec < 0) newSec = 0;
                if (newMin < 0) newMin = 0;
                if (newHours < 0) newHours = 0;

                return [newHours, newMin, newSec];
            });
        }, intervalDuration);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${styles.timer} ${id === 0 && styles.border_top}`}>
            <div className={styles.countdown}>
                {countdown[0] > 0 && `${String(countdown[0]).padStart(2, '0')}:`}
                {String(countdown[1]).padStart(2, '0')}:
                {String(countdown[2]).padStart(2, '0')}
                <br />
                <span>{timer.label || timeInWords([initialCountdown[0], initialCountdown[1], initialCountdown[2]])}</span>
            </div>
            <div className={styles.controls}></div>
        </div>
    );
}

export default Timer;
