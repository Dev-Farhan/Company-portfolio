export function GetInTouch() {
  return (
    <div className="py-8 md:py-16 lg:mt-16 flex flex-wrap md:flex-nowrap justify-between mb-4">
      <div>
        <p className="font-normal text-gray-500 text-md md:text-lg uppercase mb-3">
          Get in Touch
        </p>
        <h1 className="font-bold text-gray-700 text-xl md:text-4xl">
          Have a project in mind?
        </h1>
      </div>

      <div className="mt-10">
        <a
          href="mailto:digiflux.mail@gail.com?subject=Project Inquiry&body=Hello, I would like to discuss a project."
          className="px-4 py-2 md:px-8 md:py-3 font-medium text-green-500 text-lg border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300"
        >
          Contact Us Now
        </a>
      </div>
    </div>
  );
}
