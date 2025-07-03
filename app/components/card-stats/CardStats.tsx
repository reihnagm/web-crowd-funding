import React from "react";
import { Banknote } from "lucide-react";

const CardStats = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex gap-x-3 justify-between items-center shadow-lg p-6 basis-[32%]">
      <div className="flex basis-9/12 flex-col gap-y-2">
        <h6 className="text-slate-600">{title}</h6>
        <h2 className="text-black font-bold text-xl">Rp. 0</h2>
        <p>{desc}</p>
      </div>
      <div className="basis-3/12 text-right flex justify-end">
        <img className="w-16" src="/images/money.png" alt="" />
      </div>
    </div>
  );
};

export default CardStats;
