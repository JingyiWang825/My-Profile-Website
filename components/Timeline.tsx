"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative w-full py-12">
      {/* Horizontal Line */}
      <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mist/50 to-transparent" />
      
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {items.map((item, idx) => (
          <motion.div 
            key={`${item.year}-${item.title}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Year */}
            <span className="text-sm font-medium tracking-widest text-dusk mb-4">
              {item.year}
            </span>

            {/* Dot */}
            <div className="w-3 h-3 rounded-full bg-ink/80 shadow-[0_0_15px_rgba(231,235,242,0.8)] z-10 mb-8" />

            {/* Content */}
            <div className="space-y-3 px-4">
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed max-w-[200px]">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
