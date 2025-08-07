"use client";

import { useState, useMemo } from "react";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import BudgetItem from "./DailyBudget";
import MonthlyHeader from "../header/MonthlyHeader";
import { useAuthStore } from "@/store/authStore";
import { useMonthStore } from "@/store/monthStore";
import { useBudgetList } from "@/hooks/useBudget";
import { BudgetType, SortType } from "@/types/form";



export default function BudgetList() {
  const { user } = useAuthStore();
  const { selectedMonth } = useMonthStore();
  const { data: budgets } = useBudgetList(selectedMonth, user?.id);

  const [type, setType] = useState<BudgetType>("all");
  const [sortType, setSortType] = useState<SortType>("latest");

  const filteredBudgets = useMemo(() => {
    if (!budgets) return [];
    let filtered = budgets;
    if (type !== "all") {
      filtered = filtered.filter(b => b.budget_type === type);
    }
    filtered = [...filtered].sort((a, b) => {
      if (sortType === "latest") {
        return b.date.localeCompare(a.date);
      } else {
        return a.date.localeCompare(b.date);
      }
    });
    return filtered;
  }, [budgets, type, sortType]);
  
  if (!user?.id || !selectedMonth) return null;
  return (
    <>
      <MonthlyHeader />
      <div className="flex justify-between">
        <div className="text-base sm:text-lg flex gap-2 items-center">
          <FaRegMoneyBill1 className="text-mainColor-500 text-xl sm:text-2xl" />
          <span>전체 내역 {filteredBudgets.length}건</span>
        </div>
        <div className="flex gap-2 sm:gap-4 text-xs sm:text-base items-center">
          <button
            className={`transition-colors px-2 py-1 rounded-xl ${type === "all" ? "bg-mainColor-200 text-mainColor-600 font-bold" : "text-gray-500"}`}
            onClick={() => setType("all")}
          >
            전체
          </button>
          <button
            className={`transition-colors px-2 py-1 rounded-xl ${type === "income" ? "bg-green-100 text-green-600 font-bold" : "text-gray-500"}`}
            onClick={() => setType("income")}
          >
            💚 수입
          </button>
          <button
            className={`transition-colors px-2 py-1 rounded-xl ${type === "expense" ? "bg-red-100 text-red-600 font-bold" : "text-gray-500"}`}
            onClick={() => setType("expense")}
          >
            ❤️ 지출
          </button>
        </div>
      </div>
      <div className="w-32 mt-2">
        <select
          className="p-2 border border-gray-200 rounded-xl bg-white text-xs sm:text-base text-gray-800 focus:outline-none"
          value={sortType}
          onChange={e => setSortType(e.target.value as SortType)}
        >
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>
      </div>
      <div className="mt-4">
        {filteredBudgets.length > 0 ? (
          filteredBudgets.map((b) => (
            <BudgetItem key={b.id} {...b} />
          ))
        ) : (
          <div>아직 내역이 없어요 ✍🏻</div>
        )}
      </div>
    </>
  );
}
