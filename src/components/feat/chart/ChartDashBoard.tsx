"use client";

import Divider from "@/components/common/divider/CommonDivider";
import DonutChart from "./DonutChart";
import PayChart from "./PayChart";
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