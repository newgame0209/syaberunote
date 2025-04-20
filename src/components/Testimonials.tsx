import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TestimonialStats from './testimonials/TestimonialStats';
import TestimonialCategories from './testimonials/TestimonialCategories';
import { testimonialsByCategory, TestimonialCategories as TestimonialCategoriesType } from '@/data/testimonialData';

// Define string literal type for our categories to ensure type safety
type CategoryKey = 'students' | 'parents' | 'educators';

const Testimonials = () => {
  // Use the specific string literal type for state
  const [category, setCategory] = useState<CategoryKey>("students");

  return (
    <section id="testimonials" className="py-10 md:py-20 px-4 md:px-12 relative">
      {/* アクセシビリティのための非表示ヘッダー */}
      <h2 className="sr-only">導入事例と利用者の声</h2>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            導入事例
          </h2>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
            学習障害・ディスレクシアの方々が「しゃべるノート」を活用して学びを進めている事例をご紹介します
          </p>
        </div>
        
        {/* 統計データ表示 */}
        <TestimonialStats />
        
        {/* カテゴリタブ */}
        <Tabs 
          defaultValue="students" 
          value={category} 
          onValueChange={(value) => setCategory(value as CategoryKey)} 
          className="mb-8"
        >
          <TabsList className="mx-auto flex justify-center mb-6 p-1 bg-secondary">
            <TabsTrigger value="students" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">学習者</TabsTrigger>
            <TabsTrigger value="parents" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">保護者</TabsTrigger>
            <TabsTrigger value="educators" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">教育関係者</TabsTrigger>
          </TabsList>
          
          <TestimonialCategories category={category} />
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
