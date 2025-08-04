import BudgetItem from "@/components/feat/budget-list/DailyBudget";
import Header from "@/components/feat/header/CommonHeader";
import MonthlyHeader from "@/components/feat/header/MonthlyHeader";
import { FaRegMoneyBill1 } from "react-icons/fa6";

export default function BudgetListPage () {
  return (
    <div>
      <Header />
      <MonthlyHeader />
      <div className="flex justify-between">
        <div className="text-base sm:text-lg flex gap-2 items-center">
          <FaRegMoneyBill1 className="text-mainColor-500 text-xl sm:text-2xl"/>
          <span>전체 내역 nn건</span>
        </div>
        <div className="flex gap-4 text-xs sm:text-base items-center">
          <span>💚 수입</span>
          <span>❤️ 지출</span>
        </div>
      </div>
      <div className="w-6 sm:w-8 cursor-pointer mt-2">
        <select
          className="p-2 border border-gray-200 rounded-xl bg-white text-xs sm:text-base text-gray-800 focus:outline-none"
        >
          <option>최신순</option>
          <option>오래된순</option>
        </select>
      </div>
      <div className="mt-4">
        {/* TODO: map으로 변경 및 목데이터 연결시 수정예정 */}
        <BudgetItem />
        <BudgetItem />
        <BudgetItem />
        <BudgetItem />
        <BudgetItem />
        <BudgetItem />
        <BudgetItem />
        <BudgetItem />
      </div>
    </div>
  )
}