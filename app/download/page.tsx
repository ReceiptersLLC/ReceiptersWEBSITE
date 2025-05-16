import Link from 'next/link';
import Image from 'next/image';

const DownloadPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Download the App</h1>
      <p className="text-xl text-gray-600 mb-8">Choose your platform below:</p>
      <div className="flex space-x-8">
        <Link href="https://apps.apple.com/gb/app/receipters/id6740431170" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center cursor-pointer">
            {/* Replace with your actual image path for Apple App Store icon */}
            <Image src="/assets/download-pages/apple-store-icon.png" alt="Apple App Store" width={100} height={100} />
            <span className="mt-2 text-lg">App Store</span>
          </div>
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.receipters" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center cursor-pointer">
            {/* Replace with your actual image path for Google Play Store icon */}
            <Image src="/assets/download-pages/play-store-icon.png" alt="Google Play Store" width={100} height={100} />
            <span className="mt-2 text-lg">Play Store</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DownloadPage;