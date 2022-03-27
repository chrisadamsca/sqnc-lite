import { Clock } from '../../lib/Clock';
import './Transport.scss';

const Transport = () => {

  const startClock = () => {
    const clock = new Clock(new AudioContext());
    clock.start();
  }

  return (
    <section id="Transport">
      <button onClick={startClock}><img src='svg/play.svg' alt="play button" /></button>
    </section>
  )

}

export default Transport;