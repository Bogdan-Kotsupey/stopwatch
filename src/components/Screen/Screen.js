import { useState } from "react";

import { interval } from "rxjs";
import { map } from "rxjs/operators";

import Buttons from "../Buttons/Buttons";
import Timer from "../Timer/Timer";

import './Screen.css';


function Screen() {
  const [timer, setTimer] = useState(0);
  const [difference, setDifference] = useState(0);
  const [subscription, setSubscription] = useState("");
  const [prevent, setPrevent] = useState(true);

  const onStartHandler = () => {
    if (!subscription) {
      const timerSubscription = interval(1000)
        .pipe(map((v) => v + 1))
        .subscribe((v) => {
          setTimer(v + difference);
        });
      setSubscription(timerSubscription);
    } else {
      subscription.unsubscribe();
      setTimer(0);
      setDifference(0);
      setSubscription("");
    }
  };

  const pause = () => {
    if (prevent) {
      setPrevent(false);
      const timerInstance = setTimeout(function () {
        setPrevent(true);
        clearTimeout(timerInstance);
      }, 300);
    } else {
      if (subscription) {
        subscription.unsubscribe();
      }

      setDifference(timer);
      setSubscription("");
    }
  };

  const onResetHandler = () => {
    if (subscription) {
      subscription.unsubscribe();
    }

    const timerSubscription = interval(1000).subscribe((v) => {
      setTimer(v);
    });
    setSubscription(timerSubscription);
  };

  return (
    <div className="screen">
      <Timer time={timer} />
      <Buttons
        subscription={subscription}
        handleStart={onStartHandler}
        handleDoubleClick={pause}
        handleReset={onResetHandler}
      />
    </div>
  );
}

export default Screen;
