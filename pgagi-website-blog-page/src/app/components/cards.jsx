import React from "react";

const ServicesData = [
  {
    id: 1,
    span: 'Phase 1',
    img: 'images/img1.png ',
    name: "Discovery and Feasibility",
    description:
      "Assessing AI's potential to innovate and validating the initial concept with a POC."
  },
  {
    id: 2,
    span: 'Phase 2',
    img: 'images/img2.png',
    name: "Data Preparation and Research",
    description:
      "Curating and refining data sets to lay the groundwork for tailored AI solutions.",
  },
  {
    id: 3,
    span: 'Phase 3',
    img: 'images/img3.png ',
    name: "Model Development and Strategy",
    description:
      "Crafting and training bespoke AI models, strategizing for integration and scalability.",
  },
  {
    id: 4,
    span: 'Phase 4',
    img: 'images/img4.png',
    name: "MVP Creation",
    description:
      "Building a functional Minimum Viable Product that embodies the AI solution for user feedback.",
  },
  {
    id: 5,
    span: 'Phase 5',
    img: 'images/img6.png',
    name: "Quality Assurance",
    description:
      "Testing and refining the AI MVP, prioritizing performance, and user-centric enhancements.",
  },
  {
    id: 6,
    span: 'Phase 6',
    img: 'images/img7.png',
    name: "Deployment and Evaluation",
    description:
      "Launching the AI product with ongoing evaluation and optimization for peak performance.",
  },
];

const Services = () => {
    return (
      <>
        <span id="services"></span>
        <div className="py-10 relative ">
          <div className="container mx-auto w-3/5">
          <div className="mb-auto text-center max-w-[400px] mx-auto    ">
          <h1 className="text-2xl lg:text-4xl mb-5 font-bold text-black dark:text-black whitespace-nowrap md:text-center flex justify-center items-center">
  Here&apos;s how we make <br /> products grow
</h1>

  <p className="text-sm text-black mb-5 dark:text-gray-400 hidden md:block">
    Our AI design process
  </p>
</div>



            <div className="relative mt-2">
              <div className="absolute -inset-5 rounded-full bg-blue-500/20 blur-xl"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
                {ServicesData.map((service) => (
                  <button
                    key={service.id}
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    className="rounded-2xl mb-5 bg-white relative shadow-xl duration-high group h-[320px] transition-transform hover:-translate-y-2 flex flex-col justify-between"
                  >
                    <div className="mt-5 h-[240px] w-[240px] flex items-center justify-center overflow-hidden mx-auto">
                      <img
                        src={service.img}
                        alt=""
                        className="max-h-full max-w-full transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-5 text-center flex flex-col justify-between flex-grow">
                      <div>
                        <span className="mt-1 text-sm font-bold text-blue-500 mb-1">{service.span}</span>
                        <h1 className="text-xl font-bold mb-1">{service.name}</h1>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        {service.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Services;
