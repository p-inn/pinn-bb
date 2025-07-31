"use client";

import { useSignOut } from "@/hooks/useSign";
import Link from "next/link";
import { FaChartColumn, FaArrowRightFromBracket, FaList } from "react-icons/fa6";

export default function Header() {
  const { mutate: signOut } = useSignOut();
  const icons = [
  { icon: <FaChartColumn />, href: "/chart-page" },
  { icon: <FaList />, href: "/budget-list" },
];

  return (
    <div className="fixed inset-x-0 top-0 w-full z-50">
      <div className="flex items-center bg-mainColor-300 justify-between h-20 px-3 sm:px-6">
        <div className="hidden sm:block w-20" />
        <div className="flex-1 flex sm:justify-center justify-start min-w-[120px] sm:min-w-[180px]">
          <img
            src="/PinnBB-Logo.png"
            alt="PinnBB Logo"
            className="w-[120px] sm:w-[180px] h-auto mr-2 sm:mr-0"
          />
        </div>
        <div className=" flex gap-2 sm:gap-5 text-mainColor-500 text-xl sm:text-2xl cursor-pointer mt-8">
          {icons.map(({ icon, href }, idx) => (
            <Link key={href} href={href}>
              {icon}
            </Link>
          ))}
          <FaArrowRightFromBracket onClick={() => signOut()}/> 
        </div>
      </div>
    </div>
  );
}
