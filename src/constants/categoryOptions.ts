import { BudgetCategory } from "@/types/form";

export const CATEGORY_OPTIONS: { value: BudgetCategory; label: string, color?: string; }[] = [
  { value: "food", label: "식비", color: "#8C81C7" },
  { value: "etc", label: "기타", color: "#819BC7" },
  { value: "transport", label: "교통", color: "#FDA760" },
  { value: "health", label: "의료/건강", color: "#F2EF97" },
  { value: "salary", label: "월급", color: "#81C784" },
  { value: "living", label: "생활비", color: "#81C7C3" },
  { value: "allowance", label: "용돈", color: "#F7ABBE" },
  { value: "culture", label: "문화/여가", color: "#C781B9" },
];