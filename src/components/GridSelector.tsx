import type { Dispatch } from "react";
import { LayoutPanelTop } from 'lucide-react';

type props={
    onGridSelect:Dispatch<number>
}


const GridSelector = ({onGridSelect}:props) => {
  return (
    <div className="flex gap-2 items-center ">
        <LayoutPanelTop size={16} className="text-blue-400"/>
        <span>  Grid Size :</span>
        <select onChange={(e)=>onGridSelect(Number(e.currentTarget.value))}
            className="bg-white px-2 text-sm py-2 border border-gray-300 outline-0 roun">
            <option value={4}>4 x 4 (8 Pairs)</option>
            <option value={6}>6 x 6 (18 Pairs)</option>
            <option value={8}>8 x 8 (32 Pairs)</option>
        </select>
    </div>
  )
}

export default GridSelector