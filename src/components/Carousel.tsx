"use client";

import { useState } from "react";

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
  );
};

export default Carousel;
