import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBudget } from "@/api/budget";
import { BudgetListData } from "@/types/form";

export function useAddBudget() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newBudget: Omit<BudgetListData, "id">) => addBudget(newBudget),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
}