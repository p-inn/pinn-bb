"use client";

import Divider from "@/components/common/divider/CommonDivider";
import BudgetItem from "../budget-list/DailyBudget";
import DonutChart from "../chart/DonutChart";
import { useBudgetList } from "@/hooks/useBudget";
import MonthlyHeader from "../header/MonthlyHeader";
import { useAuthStore } from "@/store/authStore";
import { useMonthStore } from "@/store/monthStore";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";
import { useMemo } from "react";

export default function MainDashBoard() {
  const { user } = useAuthStore();
  const { selectedMonth } = useMonthStore();
  const { data: budgets } = useBudgetList(selectedMonth, user?.id);
  const categoryData = useMemo(() => {
  const sumByCategory: Record<string, number> = {};
  budgets?.forEach((b) => {
    if (b.budget_type === "expense") {
      sumByCategory[b.category] = (sumByCategory[b.category] || 0) + b.amount;
    }
  });
  return CATEGORY_OPTIONS
    .filter(opt => sumByCategory[opt.value])
    .map(opt => ({
      name: opt.label,
      value: sumByCategory[opt.value],
      color: opt.color || "#8884d8",
    }));
}, [budgets]);
  if (!user?.id || !selectedMonth) {
  return null;
}
  return ( 
    <>
      <MonthlyHeader />
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Divider title="수입" classNames="min-w-[200px] flex-1">
              <span className="block text-center pb-3 text-lg sm:text-xl font-semibold text-mainColor-500">
                {budgets
                  ?.filter(b => b.budget_type === "income")
                  .reduce((acc, cur) => acc + cur.amount, 0)
                  .toLocaleString()} 원
              </span>
            </Divider>
            <Divider title="지출" classNames="min-w-[200px] flex-1">
              <span className="block text-center pb-3 text-lg sm:text-xl font-semibold text-expense">
                {budgets
                  ?.filter(b => b.budget_type === "expense")
                  .reduce((acc, cur) => acc + cur.amount, 0)
                  .toLocaleString()} 원
              </span>
            </Divider>
          </div>
          <Divider title="이번달의 수입/지출 내역" classNames="h-full">
            {budgets && budgets.length > 0
              ? budgets.slice(0, 4).map((b) => (
                  <BudgetItem key={b.id} {...b} />
                ))
              : <div>아직 내역이 없어요 ✍🏻</div>
            }
          </Divider>
        </div>
        <Divider title="카테고리별 지출">
          <DonutChart data={categoryData} />
        </Divider>
    </div>
  </>
  )
}