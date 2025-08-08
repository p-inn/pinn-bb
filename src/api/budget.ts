import { supabase } from "@/supabase/supabaseClient";
import { BudgetListData } from "@/types/form";
import dayjs from "dayjs";

export const addBudget = async (newBudget: Omit<BudgetListData, "id">) => {
  const { data: { user } } = await supabase.auth.getUser();
    console.log("user:", user);
    if (!user?.id) throw new Error("로그인이 필요해요!");

    const payload = { ...newBudget, user_id: user.id };
    console.log("payload:", payload);
    const { data, error } = await supabase
      .from("budgets")
      .insert([payload])
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

export async function fetchBudgetsByYear(userId: string, year: number) {
  const from = `${year}-01-01`;
  const to = `${year}-12-31`;
  const { data, error } = await supabase
    .from("budgets")
    .select("*")
    .eq("user_id", userId)
    .gte("date", from)
    .lte("date", to)
    .order("date", { ascending: true });

  if (error) throw error;
  return data || [];
}
