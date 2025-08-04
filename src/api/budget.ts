import { supabase } from "@/supabase/supabaseClient";
import { BudgetListData } from "@/types/form";

export const addBudget = async (newBudget: Omit<BudgetListData, "id">) => {
  const { data, error } = await supabase
    .from("budgets")
    .insert([newBudget])
    .select();

  if (error) throw error;
  return data?.[0];
};