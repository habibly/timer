import styles from "./Header.module.css";

function Toolbar({ totalTimers, updateNewTimerVisibility }) {
  function handleChange() {
    updateNewTimerVisibility(true)
  }
  if (totalTimers > 0) {
    return (
      <div className={styles.toolbar}>
        <button className={styles.button}> Edit</button>

        <button onClick={handleChange} className={styles.new}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1L10 19"
              stroke="#FF9F0A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="0.75"
              y1="10.25"
              x2="19.25"
              y2="10.25"
              stroke="#FF9F0A"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    );
  }
}

function Header({ totalTimers, updateNewTimerVisibility }) {
  return (
    <div className={styles.wrapper}>
      <Toolbar totalTimers={totalTimers} updateNewTimerVisibility={updateNewTimerVisibility} />
      <h1 className={styles.h1}>Timers</h1>
    </div>
  );
}
export default Header;
