import { useState, useEffect, useRef } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log("Это интервал каждые 1000ms " + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Зупинка інтервала");
      stop();
    };
  }, []);

  const stop = () => {
    console.log("stop");
    clearInterval(intervalId.current);
  };

  console.log("buttonRef :>> ", buttonRef);

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Текущее время: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop} ref={buttonRef}>
        Остановить
      </button>
    </div>
  );
};

export default Clock;

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }
