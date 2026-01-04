'use client';

import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <html>
            <body>
                <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Something went wrong!
                        </h2>
                        <p className="mt-4 text-gray-500">
                            A critical error occurred. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => reset()}
                            className="mt-8 inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
