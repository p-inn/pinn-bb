import { BudgetListData } from "@/types/form";
import CategoryBadge from "../CategoryBadge";
import dayjs from "dayjs";

export default function BudgetItem({
  date,
  category,
  description,
  amount,
  budget_type,
}: BudgetListData) {
  return (
    <div className="flex justify-between items-center pb-4 min-w-0 text-sm sm:text-base my-4 text-gray-500">
      <div className="flex justify-start items-center gap-2">
        <span>{dayjs(date).format("MM.DD")}</span>
        {/* category-badge */}
        <CategoryBadge type={category} />
        {/* description */}
        <span>{description}</span>
      </div>
      <span
        className={`font-semibold ${
          budget_type === "expense" ? "text-expense" : "text-mainColor-500"
        }`}
      >
        {budget_type === "expense" ? "- " : "+ "}
        {(amount ?? 0).toLocaleString()} 원
      </span>
    </div>
  )
}