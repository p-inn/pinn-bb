"use client";

import { useMonthStore } from "@/store/monthStore";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function MonthlyHeader() {
  const { selectedMonth, setSelectedMonth } = useMonthStore();

  const goPrevMonth = () => setSelectedMonth(selectedMonth.subtract(1, "month"));
  const goNextMonth = () => setSelectedMonth(selectedMonth.add(1, "month"));

  const monthText = selectedMonth.format("YYYY년 M월");

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
