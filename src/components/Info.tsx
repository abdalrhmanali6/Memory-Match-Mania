import { CircleCheck, MousePointerClick } from "lucide-react";


type props = {
  match: number;
  moves: number;
  total:number
  Timer:string
};

const Info = ({ match, moves ,total,Timer}: props) => {

  return (
    <div className="bg-white flex max-w-200 w-full px-4 py-3 rounded-3xl shadow-sm justify-between items-center shrink-0">
      <div className="flex gap-2">
        <div className="md:p-4 hidden md:block  md:bg-sky-50 rounded-2xl ">
          <MousePointerClick className="text-blue-400 size-5 md:size-6" />
        </div>
        <div className="flex flex-col items-center justify-center md:items-start">
          <span className="text-gray-400 text-sm md:text-base">MOVES</span>
          <span className="font-bold">{moves}</span>
        </div>
      </div>
      <div>
          {Timer}
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm md:text-base">Matches</span>
          <span className="font-extrabold text-blue-400 ">{match} / {total}</span>
        </div>

        <div className="md:p-4  hidden md:block bg-sky-50 rounded-2xl ">
          <CircleCheck  className="text-blue-400 " />
        </div>
      </div>
    </div>
  );
};

export default Info;
