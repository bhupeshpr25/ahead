"use client";

import { motion, useInView, useTransform } from "framer-motion";
import { useState, useRef } from "react";

interface Card {
  emoji: string;
  title: string;
  description: string;
}

//assign random colors to carousel cards
const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CarouselCard: React.FC<{ card: Card }> = ({ card }) => {
  const [bgColor] = useState<string>(getRandomColor());

  return (
    <article
      className={`rounded-xl p-4 w-72`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center text-3xl">{card.emoji}</div>

      <h3 className="font-medium text-lg text-white">{card.title}</h3>

      <p className="mt-1 text-md text-gray-300">{card.description}</p>
    </article>
  );
};

const Carousel: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const divRef = useRef(null);
  const imgRef = useRef(null);
  const isDivInView = useInView(divRef, { once: true });
  const isImgInView = useInView(imgRef, { once: true });

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const cards: Card[] = [
    {
      emoji: "😒",
      title: "You quabble with your partner Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam sapiente ducimus laborum.",
    },
    {
      emoji: "😠",
      title: "You argue with a colleague",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur quaerat enim? Neque.",
    },
    {
      emoji: "😳",
      title: "You get a promotion at work",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis eos possimus cupiditate.",
    },
    {
      emoji: "🤨",
      title: "You attend a class reunion",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos eos officia perferendis.",
    },
    {
      emoji: "😬",
      title: "You spill coffee on your shirt",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos eos officia perferendis.",
    },
  ];

  const numCards = cards.length;
  const repetitions = 3;

  return (
    <div>
      <div className="flex items-center justify-start">
        <motion.div
          ref={divRef}
          className="text-3xl lg:text-5xl font-bold m-5 mb-20 lg:m-20"
          style={{
            transform: isDivInView ? "none" : "translateX(-200px)",
            opacity: isDivInView ? 1 : 0,
            transition: "all  0.9s cubic-bezier(0.17,  0.55,  0.55,  1)  0.5s",
          }}
        >
          Does this sound familiar...
        </motion.div>

        <motion.img
          ref={imgRef}
          src="/red.png"
          alt=""
          width={100}
          height={100}
          style={{
            right: 0,
            top: "50%",
            transform: isImgInView ? "translateX(0)" : "translateX(150%)",
            opacity: isImgInView ? 1 : 0,
            transition:
              "transform   0.9s ease-in-out, opacity   0.5s ease-in-out",
          }}
        />
      </div>

      <div className="flex overflow-hidden space-x-4 group">
        <div
          className="flex space-x-10 animate-loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          {Array.from({ length: numCards * repetitions }).map((_, index) => {
            const cardIndex = index % numCards;
            return <CarouselCard key={index} card={cards[cardIndex]} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
