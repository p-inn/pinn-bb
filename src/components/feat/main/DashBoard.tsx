"use client";

import Divider from "@/components/common/divider/CommonDivider";
import BudgetItem from "../budget-list/DailyBudget";
import DonutChart from "../chart/DonutChart";
import MonthlyHeader from "../header/MonthlyHeader";

export default function MainDashBoard() {
  return ( 
    <>
      <MonthlyHeader />
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Divider title="수입" classNames="min-w-[200px] flex-1">
              <span className="block text-center pb-3 text-lg sm:text-xl font-semibold text-mainColor-500">200,000 원</span>
            </Divider>
            <Divider title="지출" classNames="min-w-[200px] flex-1">
              <span className="block text-center pb-3 text-lg sm:text-xl font-semibold text-expense">70,000 원</span>
            </Divider>
          </div>
          <Divider title="이번달의 수입/지출 내역" classNames="h-full">
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          </Divider>
        </div>
        <Divider title="카테고리별 지출">
          <DonutChart />
        </Divider>
    </div>
  </>
  )
}