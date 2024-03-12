const Body = () => {
  return (
    <>
      <section className="bg-customYellow" id="one">
        <div className="text-center py-12">
          <img
            className="mt-4 mx-auto w-64 md:w-auto"
            src="../../public/img_1.png"
            alt="Image 1"
          />
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold">
            Simplify Your Workflow
          </h1>
          <p className="mt-4 text-slate-500">
            Animated solutions for complex issues.
          </p>
          <button className="mt-8 bg-customOrange hover:bg-orange-800 py-2 px-8 rounded text-white">
            Get Started
          </button>
        </div>
      </section>

      <section className="bg-customBrown py-12" id="two">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <img
            className="w-64 md:w-auto"
            src="../../public/img_2.png"
            alt="Image 2"
          />
          <div className="md:pl-10 mt-6 md:mt-0">
            <p className="text-customOrange font-semibold text-xl md:text-2xl">
              Our Vision
            </p>
            <p className="text-lg md:text-3xl text-white leading-normal">
              We aim to streamline issue tracking with vivid visual tools and
              intelligent automation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
