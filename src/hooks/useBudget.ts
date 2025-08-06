"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addBudget, fetchBudgetsByMonth } from "@/api/budget";
import { BudgetListData } from "@/types/form";
import dayjs from "dayjs";

export function useAddBudget() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newBudget: Omit<BudgetListData, "id">) => addBudget(newBudget),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
}
export function useBudgetList(selectedMonth?: dayjs.Dayjs, userId?: string) {
  return useQuery({
    queryKey: [
      "budgets",
      userId,
      selectedMonth ? selectedMonth.format("YYYY-MM") : undefined,
    ],
    queryFn: () =>
      userId && selectedMonth
        ? fetchBudgetsByMonth(selectedMonth.format("YYYY-MM"), userId)
        : [],
    enabled: !!userId && !!selectedMonth,
  });
}