import { BudgetCategory } from '@/types/form';
import { cn } from '@/utils/cn';


const colorMap: Record<BudgetCategory, string> = {
  food: "bg-[#8C81C7]",
  etc: "bg-[#819BC7]",
  transport: "bg-[#FFA75E]",
  health: "bg-[#F2EF97]",
  salary: "bg-[#81C784]",
  living: "bg-[#81C7C3]",
  allowance: "bg-[#F7ABBE]",
  culture: "bg-[#C781B9]",
};

const labelMap: Record<BudgetCategory, string> = {
  food: "식비",
  etc: "기타",
  transport: "교통",
  health: "의료/건강",
  salary: "월급",
  living: "생활비",
  allowance: "용돈",
  culture: "문화/여가",
};

interface CategoryBadgeProps {
  type: BudgetCategory;
}

export default function CategoryBadge({ type }: CategoryBadgeProps) {
  return (
    <div
      className={cn(
        "w-[70px] sm:w-[90px] px-1 py-2 rounded-full text-white text-center font-bold text-xs sm:text-sm",
        colorMap[type],
      )}
    >
      {labelMap[type]}
    </div>
  );
}
