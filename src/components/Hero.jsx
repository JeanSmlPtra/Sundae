import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-[210vh] flex flex-col items-start justify-center text-center bg-[#F488C6] w-[178vh] pl-40">
    <div className="flex items-start flex-col pt-[1000px]">
      <h2 className="text-8xl font-bold mb-2">Delight in Every</h2>
      <h2 className="text-8xl font-bold mb-4">Scoop</h2>
      <p className="text-xl mb-6 w-[800px] flex text-start">At Sundae Everydae we create the ultimate ice cream sundaes with the finest ingredients. Each scoop is a blend of creamy texture and rich flavors, designed to bring a smile with every bite. Dive into pure happiness and enjoy the sweetest moments.</p>
      <div className="flex flex-row">
        <button className="px-6 py-3 text-lg border-10 border-white rounded-[10px] bg-transparent text-white cursor-pointer hover:bg-[#333]">
            Check Menu
        </button>
        <div className="w-10"></div>
        <button className="px-6 py-3 text-lg border-2 border-[#FFB2DE] rounded-[10px] bg-[#FFB2DE] text-white cursor-pointer hover:bg-[#333]">
            Learn More
        </button>
      </div>
    </div>
    </section>
  );
};

export default Hero;
