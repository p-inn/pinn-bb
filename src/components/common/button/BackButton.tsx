'use client';

import { useRouter } from 'next/navigation';
import { BsChevronLeft } from 'react-icons/bs';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-2xl px-4 py-4"
    >
      <BsChevronLeft />
    </button>
  );
}
