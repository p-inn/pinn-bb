"use client";

import { useState } from "react";
import dayjs from "dayjs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface MonthlyHeaderProps {
  onMonthChange?: () => void;
}

export default function MonthlyHeader({ onMonthChange }: MonthlyHeaderProps) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const goPrevMonth = () => {
    const prev = currentMonth.subtract(1, "month");
    setCurrentMonth(prev);
    onMonthChange?.(prev);
  };
  const goNextMonth = () => {
    const next = currentMonth.add(1, "month");
    setCurrentMonth(next);
    onMonthChange?.(next);
  };

  const monthText = currentMonth.format("YYYY년 M월");
  
  // TODO: Mockup 테스트 후 props 받도록 수정
  return (
    <div className="flex pt-20 justify-between items-center text-xl sm:text-2xl cursor-pointer">
      <div className="flex items-center justify-center gap-3 py-3 text-base sm:text-xl font-medium">
        <button onClick={goPrevMonth} className="text-mainColor-500 px-2">
          <FaAngleLeft />
        </button>
        <span>{monthText}</span>
        <button onClick={goNextMonth} className="text-mainColor-500 px-2">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
