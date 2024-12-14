
export default function HomeContent() {
    return (
      <div className="bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
        {/* Intro Section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to MohamadxxH Company
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Empowering businesses with cutting-edge IT solutions tailored to your unique needs. From cloud infrastructure to secure networks, we deliver excellence that transforms your operations.
              </p>
              <div className="mt-8">
                <a
                  href="#services"
                  className="inline-block rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Discover Our Services
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://zoets.b-cdn.net/wp-content/uploads/2024/10/Top-50-Team-Collaboration-Tools.jpg"
                alt="Team collaborating on innovative IT solutions"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        <section id="services" className="mt-16 bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We provide innovative solutions for a variety of IT needs.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <img
                  src="images\cloud-server.png"
                  alt="Cloud computing icon"
                  className="mx-auto h-20 w-20"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-900">Cloud Solutions</h3>
                <p className="mt-2 text-gray-600">
                  Scalable and secure cloud computing services for modern businesses.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="images/cyber-security.png"
                  alt="Cybersecurity icon"
                  className="mx-auto h-20 w-20"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-900">Cybersecurity</h3>
                <p className="mt-2 text-gray-600">
                  Protect your data with top-tier threat detection and response systems.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="images\customer-support.png"
                  alt="IT support icon"
                  className="mx-auto h-20 w-20"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-900">IT Support</h3>
                <p className="mt-2 text-gray-600">
                  Reliable 24/7 IT support to keep your business running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="mt-16 bg-gray-100 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Hear from businesses that have partnered with us.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600">
                  "The team at [Your Company Name] provided exceptional cloud migration services. Our operations are now more efficient and secure!"
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-900">
                  — John Doe, CEO of TechCorp
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600">
                  "Thanks to their cybersecurity solutions, we’ve seen a 50% reduction in security threats."
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-900">
                  — Jane Smith, CTO of Innovate Inc.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="mt-16 bg-indigo-600 py-16 sm:py-24 lg:py-32  ">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-white">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
      Ready to Transform Your Business?
    </h2>
    <p className="mt-4 text-lg">
      Partner with MohamadxxH Company for reliable and innovative IT solutions.
    </p>
    <div className="mt-8">
      <a
        href="https://wa.me/0096171217525?text=Hello!%20I%27m%20interested%20in%20your%20IT%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-md bg-white px-5 py-3 text-indigo-600 font-semibold shadow-sm hover:bg-gray-100 hover:text-lime-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-5 w-5 mr-2"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.473-.148-.673.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.148-1.255-.464-2.39-1.478-.883-.785-1.48-1.75-1.653-2.047-.173-.297-.018-.457.13-.606.134-.134.297-.347.446-.52.148-.173.198-.297.297-.496.099-.198.05-.372-.025-.52-.074-.148-.673-1.615-.923-2.211-.242-.58-.49-.502-.673-.51-.173-.007-.372-.009-.571-.009s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.48 0 1.463 1.065 2.875 1.213 3.073.148.198 2.096 3.203 5.076 4.487.709.306 1.261.489 1.691.625.71.226 1.355.194 1.865.118.569-.084 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.569-.347zm-5.472-12.382c-6.075 0-11 4.925-11 11 0 1.947.5 3.773 1.433 5.414l-1.497 5.968 6.102-1.594c1.525.847 3.26 1.212 4.962 1.212 6.075 0 11-4.925 11-11s-4.925-11-11-11zm0 20c-1.533 0-3.019-.402-4.309-1.163l-.309-.185-3.617.947.895-3.572-.194-.293c-.861-1.302-1.366-2.815-1.366-4.434 0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z" />
        </svg>
        Contact Us on WhatsApp
      </a>
    </div>
  </div>
</section>

      </div>
    );
  }
  