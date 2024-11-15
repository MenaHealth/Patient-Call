
import React from 'react';
import dynamic from 'next/dynamic';

const AppBuilderWrapper = dynamic(() => import('../src/components/AppBuilderWrapper'), { ssr: false });



const Page = () => {
  return (
    <div>
      <h1>hello there</h1>
      <AppBuilderWrapper />
    </div>
  );
};

export default Page;
 
 
 
 
 
 
