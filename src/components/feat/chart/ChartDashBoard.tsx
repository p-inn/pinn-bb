"use client";

import Divider from "@/components/common/divider/CommonDivider";
import DonutChart from "./DonutChart";
import PayChart from "./PayChart";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";
import MonthlyHeader from "../header/MonthlyHeader";
import dayjs from "dayjs";

export default function ChartDashBoard () {
    const { data: budgets } = useBudgetList(selectedMonth, user?.id);

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