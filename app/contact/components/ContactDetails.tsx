import Link from "next/link";

export default function ContactDetails() {
  return (
    // Outer container for the overall layout
    <div className="w-full max-w-5xl mx-auto p-4">
      <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Contact Information</h3>

      {/* Main Container: This ensures a VERTICAL stacking layout */}
      <div className="flex flex-col space-y-12">

        {/* 1. Office Location: KENYA (Top Section) */}
        <div className="flex-shrink-0">
          <h4 className="text-xl font-bold text-indigo-700 mb-4 border-b pb-2">Primary Office Location</h4>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h5 className="text-lg font-semibold mb-2 text-gray-900">
              Receipters Technologies Limited
            </h5>
            <address className="not-italic text-gray-700 font-medium">
              Cove Court, Watermark Business Park<br />
              Ndege Road, Karen, Nairobi 00800 Kenya
            </address>
          </div>
        </div>

        {/* 2. Contact Methods (Middle Section) */}
        <div className="flex-shrink-0">
          <h4 className="text-xl font-bold text-indigo-700 mb-4 border-b pb-2">Reach Us</h4>
          <div className="space-y-4 p-6 border rounded-lg">
            
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-800 font-medium w-28">Phone (US):</span>
              <Link
                href="tel:+17209302570"
                className="text-indigo-600 hover:text-indigo-800 transition underline"
              >
                +1 (720) 930-2570
                
              </Link>
            </div>
  <div className="flex items-center space-x-3">
              <span className="text-gray-800 font-medium w-28">Phone (Zambia):</span>
              <Link
                href="tel:+17209302570"
                className="text-indigo-600 hover:text-indigo-800 transition underline"
              >
                +260 (096) 099-8700
                
              </Link>
            </div>
            {/* Whatsapp */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-800 font-medium w-28">Whatsapp:</span>
              <Link
                href="https://wa.me/17209302570"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition underline"
              >
                +1 (720) 930-2570
              </Link>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-800 font-medium w-28">Email:</span>
              <Link
                href="mailto:info@receipters.com"
                className="text-indigo-600 hover:text-indigo-800 transition underline break-all"
              >
                info@receipters.com
              </Link>
            </div>
            
          </div>
        </div>

        {/* 3. Other Office Locations (Bottom Section - Horizontal arrangement for existing offices) */}
        <div className="w-full">
          <h4 className="text-xl font-bold text-indigo-700 mb-4 border-b pb-2">Other Office Locations</h4>
          
          {/* Offices Horizontal Layout (Uses flex-1 for equal growth) */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            
            {/* Newark Office - Equal width and hover effect added */}
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl hover:bg-indigo-50">
              <h5 className="text-lg font-semibold mb-2 text-gray-900">United States (Newark, NJ)</h5>
              <address className="not-italic text-gray-700">
                355 Ridgewood Ave, Suite 1<br />
                Newark, NJ 07112
              </address>
            </div>
            
            {/* Zambia Office - Equal width and hover effect added */}
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl hover:bg-indigo-50">
              <h5 className="text-lg font-semibold mb-2 text-gray-900">Zambia (Lusaka)</h5>
              <address className="not-italic text-gray-700 mb-9">
                GPS Solutions Ltd, Africa Works Complex, <br />
                Agora Village, Thabo Mbeki Road, <br />
                Lusaka, Zambia
              </address>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}