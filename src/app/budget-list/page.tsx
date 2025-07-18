import Header from "@/components/feat/header/Header";
import MonthlyHeader from "@/components/feat/header/MonthlyHeader";
import { FaRegMoneyBill1 } from "react-icons/fa6";

export default function BudgetListPage () {
  return (
    <div>
      <Header />
      <div className="flex justify-center pt-20 sm:justify-start">
        <MonthlyHeader />        
      </div>
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

    </div>
  )
}