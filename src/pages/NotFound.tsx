
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md animate-fade-in-up">
        <h2 className="text-6xl font-bold mb-2 text-primary">404</h2>
        <h3 className="text-2xl font-semibold mb-4">ページが見つかりません</h3>
        <p className="text-slate-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link to="/">
          <Button className="flex items-center space-x-2 mx-auto">
            <ArrowLeft className="h-4 w-4 mr-2" />
            ホームに戻る
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
