import Link from "next/link";

export default function ContactDetails() {
  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <span className="text-indigo-700 font-medium w-28">Phone:</span>
          <Link
            href="tel:+17209302570"
            className="text-gray-800 hover:text-indigo-700 transition underline"
          >
            +1 (720) 930-2570
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-indigo-700 font-medium w-28">Whatsapp:</span>
          <Link
            href="https://wa.me/17209302570"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-indigo-700 transition underline"
          >
            +1 (720) 930-2570
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-indigo-700 font-medium w-28">Email:</span>
          <Link
            href="mailto:info@receipters.com"
            className="text-gray-800 hover:text-indigo-700 transition underline break-all"
          >
            info@receipters.com
          </Link>
        </div>
      </div>
    </div>
  );
}
