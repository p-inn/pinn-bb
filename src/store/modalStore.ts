import { create } from 'zustand';

interface ModalState {
  isAddBudgetModalOpen: boolean;
  openAddBudgetModal: () => void;
  closeAddBudgetModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isAddBudgetModalOpen: false,
  openAddBudgetModal: () => set({ isAddBudgetModalOpen: true }),
  closeAddBudgetModal: () => set({ isAddBudgetModalOpen: false }),
}));
