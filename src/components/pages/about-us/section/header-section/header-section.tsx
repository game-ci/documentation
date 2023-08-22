import React from 'react';

const HeaderSection = (): React.JSX.Element => {
  return (
    <div className="2xl:container 2xl:mx-auto py-4 sm:py-6 lg:px-20 md:pt-8 md:px-6 px-4">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full flex flex-col justify-center items-center bg-indigo-700 bg-opacity-20 text-white sm:px-12 px-6 rounded-md">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">About us</h2>
          </div>
        </div>
        <div>
          <img
            className="rounded-md lg:block hidden w-full"
            src="https://i.ibb.co/17q26WL/qw.png"
            alt="A person Coding"
          />
          <img
            className="rounded-md lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/pZX8cKM/Rectangle-122-1.png"
            alt="A person Coding"
          />
          <img
            className="rounded-md sm:hidden block w-full"
            src="https://i.ibb.co/b3YLqxC/Rectangle-122.png"
            alt="A person Coding"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
