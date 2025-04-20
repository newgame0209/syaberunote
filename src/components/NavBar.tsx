import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="font-bold text-sm sm:text-xl">しゃべるノート</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#features" className="nav-item">機能</a>
          <a href="#benefits" className="nav-item">メリット</a>
          <a href="#demo" className="nav-item">デモ</a>
          <a href="#features-detail" className="nav-item">機能詳細</a>
        </nav>
        
        <div className="flex items-center">
          <Button 
            className="rounded-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm py-1 px-2 sm:px-4 sm:py-2"
            onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
          >
            お問い合わせ
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
