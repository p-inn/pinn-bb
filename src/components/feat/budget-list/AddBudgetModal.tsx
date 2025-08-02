
import CommonModal from "@/components/common/modal/CommonModal";
import { useModalStore } from "@/store/modalStore";

export default function AddBudgetModal() {
  const { isAddBudgetModalOpen, closeAddBudgetModal } = useModalStore();

  return (
    <>
      <CommonModal isOpen={isAddBudgetModalOpen} onClose={closeAddBudgetModal}>
        <div className="p-8">모달입니다 모달이에요!</div>
      </CommonModal>
    </>
  );
}
