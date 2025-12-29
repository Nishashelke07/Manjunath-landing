const ContactFooter = () => {

    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
  
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            If You’re Over 30 and{" "}
            <span className="text-orange-400">100kg+</span>,
            <br />
            This Is Your Turning Point
          </h2>
  
          {/* Copy */}
          <div className="mt-6 space-y-3 text-lg text-gray-700">
            <p>If nothing changes,</p>
            <p className="font-semibold text-gray-900">
              fat gain doesn’t stop, it accelerates.
            </p>
            <p className="italic text-gray-600">
              One conversation can change that.
            </p>
          </div>
  
          {/* CTA */}
          <div className="mt-10">
            <button className="px-10 py-4 bg-orange-400 text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-orange-500 hover:shadow-lg transition duration-300">
              Book Your 1:1 Fat-Loss Strategy Call
            </button>
  
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
              On the call, your lifestyle, metabolism, and routine will be assessed
              and a plan designed specifically for your body.
            </p>
          </div>
  
        </div>
      </section>
    );
  };
  

export default ContactFooter;
