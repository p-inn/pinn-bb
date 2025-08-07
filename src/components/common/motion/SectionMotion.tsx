"use client";

import { motion, MotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

const defaultMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.38, type: "spring", bounce: 0.13 },
} as const;

export default function SectionMotion({
  children,
  delay = 0,
  ...rest
}: PropsWithChildren<MotionProps> & { delay?: number }) {
  return (
    <motion.div
      className="w-full h-full"
      {...defaultMotion}
      transition={{
        ...defaultMotion.transition,
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}