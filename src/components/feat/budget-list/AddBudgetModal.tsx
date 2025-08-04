'use client';

import { useForm } from "react-hook-form";
import CommonButton from "@/components/common/button/CommonButton";
import CommonInput from "@/components/common/input/CommonInput";
import CommonSelectInput from "@/components/common/input/CommonSelectInput";
import CommonModal from "@/components/common/modal/CommonModal";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";
import { useModalStore } from "@/store/modalStore";
import { BudgetListData } from "@/types/form";
import ValidationError from "../auth/ValidationError";

interface AddBudgetModalProps {
  onSubmit: (data: Omit<BudgetListData, "id">) => void;
  isPending?: boolean;
}

export default function AddBudgetModal({ onSubmit, isPending }: AddBudgetModalProps) {
  const { isAddBudgetModalOpen, closeAddBudgetModal } = useModalStore();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BudgetListData>({
    mode: "onChange",
  });

  const handleFormSubmit = (data: Omit<BudgetListData, "id">) => {
    onSubmit(data);
    reset();
    closeAddBudgetModal();
  };

  return (
    <CommonModal isOpen={isAddBudgetModalOpen} onClose={closeAddBudgetModal}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 p-4 w-full min-w-[220px] max-w-[350px] mx-auto">
        {/* 수입/지출 라디오 */}
        <div className="flex gap-3">
          <label className="flex items-center gap-1">
            <input type="radio" value="income" {...register("budget_type", { required: "‼️ 수입/지출을 선택해 주세요." })} />
            <span>수입</span>
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" value="expense" {...register("budget_type", { required: "‼️ 수입/지출을 선택해 주세요." })} />
            <span>지출</span>
          </label>
        </div>
        <ValidationError error={errors.budget_type?.message} />

        {/* 날짜 */}
        <label className="text-sm font-bold text-mainColor-500 pt-1">일자</label>
        <CommonInput
          type="date"
          {...register("date", { required: "‼️ 날짜를 입력해 주세요." })}
        />
        <ValidationError error={errors.date?.message} />

        {/* 카테고리 셀렉트 */}
        <label className="text-sm font-bold text-mainColor-500 pt-1">카테고리</label>
        <CommonSelectInput
          {...register("category", { required: "‼️ 카테고리를 선택해 주세요." })}
        >
          <option value="">카테고리 선택</option>
          {CATEGORY_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </CommonSelectInput>
        <ValidationError error={errors.category?.message} />

        {/* 금액 */}
        <label className="text-sm font-bold text-mainColor-500 pt-1">금액</label>
        <CommonInput
          type="number"
          min={1}
          {...register("amount", {
            required: "‼️ 금액을 입력해 주세요.",
            min: { value: 1, message: "‼️ 1원 이상 입력해 주세요." },
            valueAsNumber: true,
          })}
        />
        <ValidationError error={errors.amount?.message} />

        {/* 설명 */}
        <label className="text-sm font-bold text-mainColor-500 pt-1">설명</label>
        <CommonInput
          type="text"
          {...register("description")}
          placeholder="설명"
        />
        <ValidationError error={errors.description?.message} />
        {/* 버튼 */}
        <CommonButton type="submit" classNames="bg-mainColor-500 hover:bg-mainColor-600 text-white">
          {isPending ? "등록 중..." : "등록하기"}
        </CommonButton>
      </form>
    </CommonModal>
  );
}
