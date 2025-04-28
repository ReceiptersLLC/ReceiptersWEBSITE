import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simplify Your <br/>
            <span className="text-primary">Expense Management.</span>
          </h1>
          <p className="text-gray-800 mb-6 max-w-md">
            Say goodbye to manual entry and hello to automation with Receipters.
          </p>
          <button
            className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary transition">
            Get Started →
          </button>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb8275_section_top.webp"
              alt="Dashboard Example"
              width={500}
              height={400}/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-4">
              {/* You can add an icon here */}
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-xl p-2">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    className="fill-primary"
                    d="m11.05,11.05c.65-.64,1.39-1.15,2.23-1.5L9.77,1.26c-1.91.81-3.62,1.96-5.08,3.43-1.47,1.47-2.62,3.18-3.43,5.08l8.29,3.51c.35-.83.86-1.58,1.5-2.23Z"></path>
                  <path className="fill-primary"
                        d="m11.05,20.95c-.64-.65-1.15-1.39-1.5-2.22-.36-.86-.55-1.78-.55-2.73H0c0,2.16.42,4.25,1.26,6.23.81,1.91,1.96,3.62,3.43,5.08,1.47,1.47,3.18,2.62,5.08,3.43,1.97.83,4.07,1.26,6.23,1.26v-9c-.95,0-1.86-.18-2.72-.55-.83-.35-1.58-.86-2.23-1.5Z"></path>
                  <path className="fill-primary"
                        d="m30.74,9.77c-.81-1.91-1.96-3.62-3.43-5.08-1.47-1.47-3.18-2.62-5.08-3.43C20.25.42,18.16,0,16,0v9c.95,0,1.86.18,2.72.55.83.35,1.58.86,2.23,1.5.64.65,1.15,1.39,1.5,2.22.36.86.55,1.78.55,2.72s-.18,1.86-.55,2.72c-.35.83-.86,1.58-1.5,2.23-.65.64-1.39,1.15-2.23,1.5l3.51,8.29c1.91-.81,3.62-1.96,5.08-3.43,1.47-1.47,2.62-3.18,3.43-5.09.83-1.98,1.26-4.07,1.26-6.23s-.42-4.25-1.26-6.23Z"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-semibold mb-2">Cutting-Edge AI Technology</h3>
            <p className="text-gray-800 text-sm">
              Quick, reliable, and accurate receipt scanning with no manual entry required.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-xl p-2">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className="fill-primary"
                        d="m16,23c-3.86,0-7-3.14-7-7H0c0,8.82,7.18,16,16,16s16-7.18,16-16h-9c0,3.86-3.14,7-7,7Z"></path>
                  <path className="fill-primary"
                        d="m16,16C24.82,16,32,8.82,32,0h-9c0,3.86-3.14,7-7,7S9,3.86,9,0H0C0,8.82,7.18,16,16,16Z"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-semibold mb-2">User-Friendly Experience</h3>
            <p className="text-gray-800 text-sm">
              Easy and accessible expense tracking for everyone.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-xl p-2">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <circle className="fill-primary" cx="7.5" cy="7.5" r="7.5"></circle>
                  <path className="fill-primary"
                        d="m24.5,15c4.14,0,7.5-3.36,7.5-7.5S28.64,0,24.5,0s-7.5,3.36-7.5,7.5,3.36,7.5,7.5,7.5Zm0-10c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5Z"></path>
                  <path className="fill-primary"
                        d="m7.5,17c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5,7.5-3.36,7.5-7.5-3.36-7.5-7.5-7.5Zm0,10c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5,2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5Z"></path>
                  <circle className="fill-primary" cx="24.5" cy="24.5" r="7.5"></circle>
                </svg>
              </div>
            </div>
            <h3 className="font-semibold mb-2">Comprehensive Financial View</h3>
            <p className="text-gray-800 text-sm">
              Integrated bank tools for a 360-degree view of your finances.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-gray-400">This is how it works</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Snap, scan, and relax—let Receipters do the heavy lifting!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821f_img3.webp"
                   alt="Timeline" width={500} height={400}/>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Effortless Receipt Scanning</h3>
            <p className="text-gray-800 mb-8">
              Our advanced AI technology automatically scans, reads, and categorizes your receipts with unmatched
              accuracy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-semibold mb-4">Real-Time Financial Insights</h3>
            <p className="text-gray-800 mb-8">
              Get a comprehensive view of your spending in real-time with our intuitive dashboard.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image src="https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821e_img2.webp"
                   alt="Financial Insights" width={500} height={400}/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <Image src="https://cdn.prod.website-files.com/6723ac9d7ce2bbc831bb8146/6723ac9d7ce2bbc831bb821f_img3.webp"
                   alt="Integration" width={500} height={400}/>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Seamless Integration with Financial Tools</h3>
            <p className="text-gray-800 mb-8">
              Connect Receipters to your bank accounts and cards to keep all financial data in one place.
            </p>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition">
              Get started free
            </button>
          </div>
        </div>
      </section>

      {/* Simple Steps Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-wide text-gray-400">This is how it works</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Expense Management in Four Simple Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div
                className="size-12 bg-[#f3f7fb] p-3 text-indigo-600 flex items-center justify-center rounded-xl mb-4 ">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className="fill-primary"
                        d="m11.05,11.05c.65-.64,1.39-1.15,2.23-1.5L9.77,1.26c-1.91.81-3.62,1.96-5.08,3.43-1.47,1.47-2.62,3.18-3.43,5.08l8.29,3.51c.35-.83.86-1.58,1.5-2.23Z"></path>
                  <path className="fill-primary"
                        d="m11.05,20.95c-.64-.65-1.15-1.39-1.5-2.22-.36-.86-.55-1.78-.55-2.73H0c0,2.16.42,4.25,1.26,6.23.81,1.91,1.96,3.62,3.43,5.08,1.47,1.47,3.18,2.62,5.08,3.43,1.97.83,4.07,1.26,6.23,1.26v-9c-.95,0-1.86-.18-2.72-.55-.83-.35-1.58-.86-2.23-1.5Z"></path>
                  <path className="fill-primary"
                        d="m30.74,9.77c-.81-1.91-1.96-3.62-3.43-5.08-1.47-1.47-3.18-2.62-5.08-3.43C20.25.42,18.16,0,16,0v9c.95,0,1.86.18,2.72.55.83.35,1.58.86,2.23,1.5.64.65,1.15,1.39,1.5,2.22.36.86.55,1.78.55,2.72s-.18,1.86-.55,2.72c-.35.83-.86,1.58-1.5,2.23-.65.64-1.39,1.15-2.23,1.5l3.51,8.29c1.91-.81,3.62-1.96,5.08-3.43,1.47-1.47,2.62-3.18,3.43-5.09.83-1.98,1.26-4.07,1.26-6.23s-.42-4.25-1.26-6.23Z"></path>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Capture Receipts</h4>
              <p className="text-gray-800 text-sm">Snap a picture or upload from device.</p>
            </div>
            <div>
              <div
                className="size-12 bg-[#f3f7fb] p-3 text-indigo-600 flex items-center justify-center rounded-xl mb-4">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className="fill-primary"
                        d="m16,23c-3.86,0-7-3.14-7-7H0c0,8.82,7.18,16,16,16s16-7.18,16-16h-9c0,3.86-3.14,7-7,7Z"></path>
                  <path className="fill-primary"
                        d="m16,16C24.82,16,32,8.82,32,0h-9c0,3.86-3.14,7-7,7S9,3.86,9,0H0C0,8.82,7.18,16,16,16Z"></path>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Automatic Categorization</h4>
              <p className="text-gray-800 text-sm">Our AI sorts expenses for easy reference.</p>
            </div>
            <div>
              <div
                className="size-12 bg-[#f3f7fb] p-3 text-indigo-600 flex items-center justify-center rounded-xl mb-4">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <circle className="fill-primary" cx="7.5" cy="7.5" r="7.5"></circle>
                  <path className="fill-primary"
                        d="m24.5,15c4.14,0,7.5-3.36,7.5-7.5S28.64,0,24.5,0s-7.5,3.36-7.5,7.5,3.36,7.5,7.5,7.5Zm0-10c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5Z"></path>
                  <path className="fill-primary"
                        d="m7.5,17c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5,7.5-3.36,7.5-7.5-3.36-7.5-7.5-7.5Zm0,10c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5,2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5Z"></path>
                  <circle className="fill-primary" cx="24.5" cy="24.5" r="7.5"></circle>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Track and Analyze</h4>
              <p className="text-gray-800 text-sm">Monitor spending habits and gain insights.</p>
            </div>
            <div>
              <div
                className="size-12 bg-[#f3f7fb] p-3 text-indigo-600 flex items-center justify-center rounded-xl mb-4">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <rect className="fill-primary" x=".09" y="0" width="32" height="9"></rect>
                  <rect className="fill-primary" x="0" y="11.5" width="17" height="9"></rect>
                  <rect className="fill-primary" x="6.09" y="23" width="26" height="9"></rect>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Generate Reports</h4>
              <p className="text-gray-800 text-sm">Export reports for business or personal use.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
