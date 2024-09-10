import React from 'react';

const About = () => {
  return (
    <section id="features" className="py-12 bg-[#F9BFE0] h-[100vh]">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-tl-[200px] w-[55vh] rounded-br-none h-[700px] rounded-tr-none rounded-bl-none shadow-lg mt-14">
               
              </div>
              <div className='pl-[70px]'>
                <div>
                  <h2 className="text-8xl font-bold text-center mb-8 pt-[50px]">About</h2>
                </div>
                <p className='text-xl mb-6 w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='w-[100vh] bg-[#F22FBC] h-[150px] mt-[176px] ml-[-190px]'>
              </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default About;