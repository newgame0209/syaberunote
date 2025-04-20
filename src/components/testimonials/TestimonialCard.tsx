
import React from 'react';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Testimonial } from '@/data/testimonialData';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <motion.div 
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 h-auto cursor-pointer
                    transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:bg-primary/5"
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-2 md:mb-3">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="h-8 w-8 md:h-10 md:w-10 rounded-full mr-3 border-2 border-primary/20"
              />
              <div>
                <h4 className="font-semibold text-sm md:text-base">{testimonial.name}</h4>
                <p className="text-xs text-slate-500">{testimonial.title}</p>
              </div>
            </div>
            <blockquote className="text-xs md:text-sm text-slate-600 italic line-clamp-5 md:line-clamp-none">
              "{testimonial.quote}"
            </blockquote>
            
            {/* 追加情報 */}
            <div className="mt-3 pt-2 border-t border-slate-100 text-xs text-slate-500">
              <p>{testimonial.usage}</p>
              <p className="text-emerald-600 font-medium">{testimonial.result}</p>
            </div>
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-0 bg-primary/95 text-white border-primary shadow-lg">
          <div className="p-4">
            <div className="flex items-center mb-3">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="h-12 w-12 rounded-full mr-3 border-2 border-white/30"
              />
              <div>
                <h4 className="font-bold text-base">{testimonial.name}</h4>
                <p className="text-xs text-white/80">{testimonial.title}</p>
              </div>
            </div>
            <blockquote className="text-sm italic border-l-2 border-white/30 pl-3">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-3 pt-2 border-t border-white/20 text-xs">
              <p className="text-white/80">{testimonial.usage}</p>
              <p className="text-white font-medium">{testimonial.result}</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  );
};

export default TestimonialCard;
