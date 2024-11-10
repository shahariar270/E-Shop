"use client"
import { useEffect, useState } from 'react';

const Countdown = () => {
  const initialTime = 3 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 15 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 1000 ? prevTime - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className='flex justify-start mt-8 gap-5' >
        <div className="bg-white rounded-full text-center w-[62px] h-[62px] flex flex-col justify-center text-[16px]">
            {days} <br />
            days
        </div>
        <div className="bg-white rounded-full text-center w-[62px] h-[62px] flex flex-col justify-center text-[16px]">
            {hours} <br />
            Hours
        </div>
        <div className="bg-white rounded-full text-center w-[62px] h-[62px] flex flex-col justify-center text-[16px]">
            {minutes} <br />
            Minute
        </div>
       
     
    </div>
  );
};

export default Countdown;
