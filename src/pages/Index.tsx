import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import DemoVideos from '@/components/DemoVideos';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import FeaturesDetail from '@/components/FeaturesDetail';
import FeedbackForm from '@/components/FeedbackForm';
import Footer from '@/components/Footer';
import ProblemSolution from '@/components/ProblemSolution';
import UseCases from '@/components/UseCases';
import FAQ from '@/components/FAQ';
import TutorialPreview from '@/components/TutorialPreview';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "しゃべるノート - 文字の壁を超えて、学ぶ喜びを。";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <ProblemSolution />
        <Benefits />
        <UseCases />
        <TutorialPreview />
        <DemoVideos />
        <FeaturesDetail />
        <FAQ />
        <Pricing />
        <CTA />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
