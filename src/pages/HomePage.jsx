import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';


function HomePage({ isLargeScreen }) {
const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2026-05-01T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft('The big day is here!');
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="right-sec">
        {isLargeScreen}
        <div className="right-content">
          <h1>Aslak & Ragnhild</h1>
          <p className="date">1-3. mai 2026</p>
          {/* <p className="countdown">{timeLeft}</p> */}
          <h2>Velkomen til vår bryllupshelg i Hardanger!</h2>
          <p>Me håpar du/dykk vil vera med å feira bryllupet vårt med familie og venar <br/> 1. mai helga 2026!</p>
          <p>Denne nettsida er meint som både invitasjon og informasjon om bryllupshelga. Nærmare program og info vil bli oppdatert våren 2026, men me ber alle om å fylla ut <a href="https://docs.google.com/forms/d/1szIkqMf9pyR5LlJcMOPnxfGY4FOE6dEFqpLbmjeCSk0/viewform?edit_requested=true">invitasjonsskjema</a> så fort som mogleg og seinast innan 1. februar 2026.</p>
          
          
          <a
            href="https://docs.google.com/forms/d/1szIkqMf9pyR5LlJcMOPnxfGY4FOE6dEFqpLbmjeCSk0/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="rsvp-button"
          >
            TRYKK HER FOR Å STADFESTE AT DU KJEM
          </a>
        </div>
    </section>
  )

}

export default HomePage;