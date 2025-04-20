
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import TestimonialCard from './TestimonialCard';
import { testimonialsByCategory } from '@/data/testimonialData';

// Use the same string literal type as in Testimonials.tsx
type CategoryKey = 'students' | 'business' | 'education';

interface TestimonialCategoriesProps {
  category: CategoryKey;
}

const TestimonialCategories = ({ category }: TestimonialCategoriesProps) => {
  return (
    <>
      {Object.keys(testimonialsByCategory).map((cat) => (
        <TabsContent 
          key={cat} 
          value={cat} 
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonialsByCategory[cat as CategoryKey].map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                index={index} 
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </>
  );
};

export default TestimonialCategories;
