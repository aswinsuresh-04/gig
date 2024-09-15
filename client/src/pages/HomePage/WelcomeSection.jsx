import React from 'react';

function WelcomeSection() {
  return (
    <section className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start mt-32 text-white max-md:mt-10 max-md:max-w-full">
        <h2 className="self-stretch text-7xl tracking-tighter leading-[78px] text-zinc-100 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Welcome to Our Platform
        </h2>
        <p className="mt-7 text-3xl tracking-tight leading-none">
          join us and explore
        </p>
        <a href="#find-gig" className="px-10 py-5 mt-10 ml-6 max-w-full text-xl leading-7 text-center bg-teal-600 rounded-[50px] w-[219px] max-md:px-5 max-md:ml-2.5">
          let's find a gig
        </a>
      </div>
    </section>
  );
}

export default WelcomeSection;