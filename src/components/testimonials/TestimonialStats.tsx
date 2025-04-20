import React from 'react';
import { motion } from 'framer-motion';
import { testimonialStats } from '@/data/testimonialData';

const TestimonialStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-center">
      {Object.entries(testimonialStats).map(([key, value], index) => (
        <motion.div 
          key={key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary/5 p-4 rounded-xl border border-primary/20"
        >
          <p className="text-2xl md:text-3xl font-bold text-primary">{value}</p>
          <p className="text-xs md:text-sm text-slate-600 capitalize">
            {key === "users" ? "利用者数" : 
             key === "schools" ? "導入教育機関" : 
             key === "supportCenters" ? "支援施設・団体" : 
             "利用者満足度"}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialStats;
