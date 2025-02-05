'use client';
import React, { useState, useRef, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  customText?: string;
  time?: number;
  preStyle?: string;
  audioSrc?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  customText = '',
  time = 1,
  preStyle = '',
}) => {
  const [animatedTitle, setAnimatedTitle] = useState<string>(text || '');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const finalClass = isHovered ? preStyle || className : className;
  const letters = customText === '' ? '!@#$%^&*()_' : customText;

  const handleMouseOver = () => {
    let iteration = 0;
    setIsHovered(true);

    function animateText() {
      intervalRef.current = setInterval(() => {
        const randomText = text
          .split('')
          .map((char, index) =>
            index < iteration
              ? char
              : letters[Math.floor(Math.random() * letters.length)]
          )
          .join('');

        setAnimatedTitle(randomText);
        iteration += 0.5 / time;

        if (iteration >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setAnimatedTitle(text);
        }
      }, 30);
    }

    animateText();
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setAnimatedTitle(text);
  };

  return (
    <div className="z-50">
      <p
        className={`${finalClass} inline z-50`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {animatedTitle}
      </p>
    </div>
  );
};

export default AnimatedText;
