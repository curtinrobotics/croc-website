"use client";

import { useState, useEffect } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTimeLeft = (): string => {
    const { days, hours, minutes, seconds } = timeLeft;
    return `${days || 0}d : ${hours || 0}h : ${minutes || 0}m : ${seconds || 0}s`;
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex space-x-2 text-center text-white">
        <div>
          <div className="text-5xl sm:text-9xl font-croc-logo">{timeLeft.days ?? 0}</div>
          <div className="text-sm font-croc-paragraph">DAYS</div>
        </div>
        <div className="text-5xl sm:text-9xl font-croc-logo">:</div>
        <div>
          <div className="text-5xl sm:text-9xl font-croc-logo">{timeLeft.hours ?? 0}</div>
          <div className="text-sm font-croc-paragraph">HOURS</div>
        </div>
        <div className="text-5xl sm:text-9xl font-croc-logo">:</div>
        <div>
          <div className="text-5xl sm:text-9xl font-croc-logo">{timeLeft.minutes ?? 0}</div>
          <div className="text-sm font-croc-paragraph">MINS</div>
        </div>
        <div className="text-5xl sm:text-9xl font-croc-logo">:</div>
        <div>
          <div className="text-5xl sm:text-9xl font-croc-logo">{timeLeft.seconds ?? 0}</div>
          <div className="text-sm font-croc-paragraph">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;