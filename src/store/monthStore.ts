import { create } from 'zustand';
import dayjs, { Dayjs } from 'dayjs';

interface MonthState {
  selectedMonth: Dayjs;
  setSelectedMonth: (month: Dayjs) => void;
}

export const useMonthStore = create<MonthState>((set) => ({
  selectedMonth: dayjs(),
  setSelectedMonth: (month) => set({ selectedMonth: month }),
}));