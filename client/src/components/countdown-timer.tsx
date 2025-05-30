import { useState, useEffect } from "react";

interface CountdownTimerProps {
  className?: string;
}

export default function CountdownTimer({ className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex justify-center space-x-4 text-center ${className}`}>
      <div className="bg-red-500 rounded-lg p-3 min-w-[60px]">
        <div className="text-2xl font-bold text-white">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-white">HARI</div>
      </div>
      <div className="bg-red-500 rounded-lg p-3 min-w-[60px]">
        <div className="text-2xl font-bold text-white">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-white">JAM</div>
      </div>
      <div className="bg-red-500 rounded-lg p-3 min-w-[60px]">
        <div className="text-2xl font-bold text-white">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-white">MENIT</div>
      </div>
      <div className="bg-red-500 rounded-lg p-3 min-w-[60px]">
        <div className="text-2xl font-bold text-white">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-white">DETIK</div>
      </div>
    </div>
  );
}
