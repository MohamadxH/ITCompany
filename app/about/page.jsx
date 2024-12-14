import Hero from "../../components/hero";

export default function About() {
  return (
    <>
      <Hero title="About" />
      <div className="relative isolate overflow-hidden bg-white px-6 py-20 sm:py-28 lg:py-32">
        {/* Decorative SVG Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-1/2 top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern-bg"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#pattern-bg)" />
          </svg>
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-indigo-600">Empower Innovation</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Seamless IT Solutions
              </h1>
              <p className="mt-4 text-lg leading-7 text-gray-700">
                Accelerate your business growth with cutting-edge technology. Our solutions simplify
                complexity, enhance productivity, and enable scalability.
              </p>
            </div>
            <ul className="space-y-6">
              <li>
                <h3 className="text-lg font-medium text-gray-900">Rapid Deployments</h3>
                <p className="text-gray-600">
                  Launch projects seamlessly with tools designed for agility and minimal downtime.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-900">Comprehensive Security</h3>
                <p className="text-gray-600">
                  Protect your data with advanced encryption and 24/7 threat monitoring.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-900">Reliable Backups</h3>
                <p className="text-gray-600">
                  Ensure uninterrupted workflows with automated cloud backups and disaster recovery.
                </p>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              className="w-full max-w-full rounded-lg shadow-lg ring-1 ring-gray-300"
              src="https://media.licdn.com/dms/image/v2/D4D12AQGj7zv9E4vX-A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699781194902?e=2147483647&v=beta&t=kbzAXBy_qoO0uQx9uHSHqelMIsVFwWQ3t_PBnLVlEhI"
              alt="IT Dashboard"
            />
          </div>
        </div>
      </div>
    </>
  );
}
