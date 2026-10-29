import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { sectionReveal } from "../lib/animations"

export default function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
