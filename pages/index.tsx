
import React from 'react';
import dynamic from 'next/dynamic';

const AppBuilderWrapper = dynamic(() => import('../src/components/AppBuilderWrapper'), { ssr: false });



const Page = () => {
  return (
    <div>
      <AppBuilderWrapper />
    </div>
  );
};

export default Page;
 
 
 
 
 
 