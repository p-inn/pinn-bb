"use client";

import { useSignOut } from "@/hooks/useSign";
import { useModalStore } from "@/store/modalStore";
import Link from "next/link";
import { FaChartColumn, FaArrowRightFromBracket, FaList, FaRegSquarePlus } from "react-icons/fa6";
import AddBudgetModal from "../budget-list/AddBudgetModal";
import { BudgetListData } from "@/types/form";
import { toast } from "sonner";
import { useAddBudget } from "@/hooks/useBudget";

export default function Header() {
  const { openAddBudgetModal } = useModalStore();
  const { mutate: signOut } = useSignOut();
  const { mutate: addBudget, isPending } = useAddBudget();

  const icons = [
  { icon: <FaChartColumn />, href: "/chart-page" },
  { icon: <FaList />, href: "/budget-list" },
];

  const handleAddBudget = (data: Omit<BudgetListData, "id">) => {
    addBudget(data, {
      onSuccess: () => toast.success("등록에 성공하였습니다 💸"),
      onError: (err) => toast.error("등록에 실패하였습니다 💦" + err.message),
    });
  };


  return (
    <>
      <div className="fixed inset-x-0 top-0 w-full">
        <div className="flex items-center bg-mainColor-300 justify-between h-20 px-3 sm:px-6">
          <div className="hidden sm:block w-20" />
          <div className="flex-1 flex sm:justify-center justify-start min-w-[120px] sm:min-w-[180px]">
            <Link href="/dashboard-page">
              <img
                src="/PinnBB-Logo.png"
                alt="PinnBB Logo"
                className="w-[120px] sm:w-[180px] h-auto mr-2 sm:mr-0"
              />
            </Link>
          </div>
          <div className="flex gap-2 sm:gap-5 text-mainColor-500 text-xl sm:text-2xl cursor-pointer mt-8">
            <FaRegSquarePlus onClick={openAddBudgetModal} className="hover:text-mainColor-600" />
            {icons.map(({ icon, href }) => (
              <Link key={href} href={href}>
                {icon}
              </Link>
            ))}
            <FaArrowRightFromBracket onClick={() => signOut()} />
          </div>
        </div>
      </div>
      <AddBudgetModal onSubmit={handleAddBudget} isPending={isPending} />
    </>
  );
}
