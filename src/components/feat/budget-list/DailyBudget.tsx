import CategoryBadge from "../CategoryBadge";

export default function BudgetList() {
  return (
    <div className="flex justify-between items-center pb-4 border-b border-b-gray-300 min-w-0 text-sm sm:text-base my-4 text-gray-500">
      <div className="flex justify-start items-center gap-2">
        <span>2025.08.12</span>
        {/* category-badge */}
        <CategoryBadge type="health" />
        {/* description */}
        <span>하노이 쌀국수</span>
      </div>
      <span className="text-[#737ABB] font-semibold">- 30,000 원</span>
    </div>
  )
}