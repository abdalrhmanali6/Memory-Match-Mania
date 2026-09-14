export type CardRefHandle = {
  flip: () => void;
  unFlip: () => void;
  isFlipped: boolean;
  icon: string;
};

export type CardProps = {
  icon: string;
  gridSize: number;
  onClick:()=>void
};