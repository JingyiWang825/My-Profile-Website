"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({ id, eyebrow, title, description, children }: SectionProps) => (
  <section id={id} className="relative py-20 md:py-28">
    <motion.div
      className="mx-auto w-full max-w-6xl px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={fadeUp}
    >
      <div className="mb-10 md:mb-12">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.3em] text-dusk">{eyebrow}</p>
        ) : null}
        <h2 className="section-title mt-3 text-3xl md:text-4xl text-ink">{title}</h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-ink/70">{description}</p>
        ) : null}
      </div>
      {children}
    </motion.div>
  </section>
);

export default Section;
