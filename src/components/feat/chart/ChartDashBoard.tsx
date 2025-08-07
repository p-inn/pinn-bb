"use client";

import Divider from "@/components/common/divider/CommonDivider";
import DonutChart from "./DonutChart";
import PayChart from "./PayChart";
import { useBudgetList, useBudgetYearList } from "@/hooks/useBudget";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";
import { useAuthStore } from "@/store/authStore";
import { useMonthStore } from "@/store/monthStore";
import { useMemo } from "react";
import MonthlyHeader from "../header/MonthlyHeader";
import dayjs from "dayjs";

export default function ChartDashBoard () {
  const { user } = useAuthStore();
    const { selectedMonth } = useMonthStore();
    const { data: budgets } = useBudgetList(selectedMonth, user?.id);
    const selectedYear = dayjs(selectedMonth).year();
    const { data: yearlyBudgets } = useBudgetYearList(selectedYear, user?.id);

    // DonutChart 집계
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

// payChart 집계
  const payChartData = useMemo(() => {
    if (!yearlyBudgets) return [];

  const grouped: Record<string, { month: string, income: number, expense: number }> = {};

    yearlyBudgets.forEach((b) => {
      const date = dayjs(b.date);
      const year = date.year();
      const month = date.format("MM");

    if (year !== selectedYear) return;

    if (!grouped[month]) {
      grouped[month] = { month: `${month}월`, income: 0, expense: 0 };
    }
    if (b.budget_type === "income") {
      grouped[month].income += b.amount;
    } else if (b.budget_type === "expense") {
      grouped[month].expense += b.amount;
    }
  });

  const result = [];
  for (let i = 1; i <= 12; i++) {
    const m = String(i).padStart(2, "0");
    result.push(grouped[m] || { month: `${m}월`, income: 0, expense: 0 });
  }
  return result;
}, [yearlyBudgets, selectedYear]);


  return (
    <>
      <div className="flex flex-col gap-4 justify-center w-full sm:w-3/4 mx-auto">
        <MonthlyHeader />
        <Divider title="카테고리별 지출">
          <DonutChart data={categoryData} />
        </Divider>
        <Divider title="월별 수입/지출">
        <PayChart data={payChartData} />
        </Divider>
      </div>
    </>
  )
}