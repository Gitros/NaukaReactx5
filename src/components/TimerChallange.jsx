import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {timerExpired && (
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-timee">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "timer started" : "Start Challange"}
          </button>
        </p>
        <p className="">
          {timerStarted ? "Time is running..." : "timer inactive"}
        </p>
      </section>
    </>
  );
}
