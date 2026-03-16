import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Page Not Found
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                    Could not find the requested resource.
                </p>
                <div className="mt-8">
                    <Link
                        href="/public"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
