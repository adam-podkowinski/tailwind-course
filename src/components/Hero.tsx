const Hero = () => {
  return (
    <div class={"grid bg-gray-100 shadow-sm lg:grid-cols-2 2xl:grid-cols-5"}>
      <div
        class={
          "mx-auto max-w-md px-8 py-8 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 2xl:col-span-2 2xl:px-20"
        }
      >
        <img class={"h-10"} src="logo.svg" alt="Workcation" />

        <img
          class={
            "mt-6 rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
          }
          src="beach-work.jpg"
          alt="Woman workcationing on the beach"
        />
        <h1
          class={`mt-6 text-2xl font-bold tracking-tighter text-gray-800 sm:mt-8 sm:text-4xl sm:leading-normal lg:text-3xl lg:leading-normal xl:text-4xl xl:leading-normal`}
        >
          You can work from anywhere.
          <span class={"block text-indigo-500"}>Take advantage of it.</span>
        </h1>
        <p
          class={
            "mt-2 text-justify text-gray-700 sm:mt-4 sm:text-xl sm:leading-normal"
          }
        >
          Workcation helps you find work-friendly rentals in beatiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div class={"mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row"}>
          <a
            class={
              "btn btn-primary block text-center shadow-lg hover:-translate-y-0.5"
            }
            href=""
          >
            Book your escape
          </a>
          <a class={"btn btn-secondary block text-center"} href="">
            Learn more
          </a>
        </div>
      </div>
      <div class={"relative hidden lg:block 2xl:col-span-3"}>
        <img
          class={"absolute inset-0 h-full w-full object-cover object-center"}
          src="beach-work.jpg"
          alt="Woman workcationing on the beach"
        />
      </div>
    </div>
  );
};

export default Hero;
