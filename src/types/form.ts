export type BudgetType = 'income' | 'expense';
export type BudgetCategory =
  | 'food' | 'etc' | 'transport' | 'health'
  | 'salary' | 'living' | 'allowance' | 'culture';

export interface BudgetListData {
  id: number;
  budgetType: BudgetType;
  description: string;
  category: BudgetCategory;
  date: string;      // ISO 문자열 대비
  amount: number;
}