import { supabase } from "@/supabase/supabaseClient";
import { BudgetListData } from "@/types/form";
import dayjs from "dayjs";

export const addBudget = async (newBudget: Omit<BudgetListData, "id">) => {
  const { data, error } = await supabase
    .from("budgets")
    .insert([newBudget])
    .select();

  if (error) throw error;
  return data?.[0];
};

export async function fetchBudgetsByMonth(ym: string, userId: string) {
  const { data, error } = await supabase
    .from("budgets")
    .select("*")
    .eq("user_id", userId)
    .gte("date", `${ym}-01`)
    .lt("date", dayjs(ym).add(1, "month").format("YYYY-MM-01"));

  if (error) throw error;
  return data;
}