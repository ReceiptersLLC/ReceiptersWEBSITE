import Link from 'next/link';
import Image from 'next/image';

const DownloadPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Download the App</h1>
      <p className="text-lg text-gray-600 mb-10 text-center">Choose your platform below:</p>
      
      <div className="flex gap-3 items-center">
        {/* App Store */}
        <Link href="https://apps.apple.com/gb/app/receipters/id6740431170" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <Image 
              src="/assets/app-store.svg" 
              alt="Apple App Store" 
              width={160} 
              height={48} 
              priority 
            />
            {/* <span className="mt-2 text-base sm:text-lg text-gray-800 font-medium">App Store</span> */}
          </div>
        </Link>

        {/* Google Play */}
        <Link href="https://play.google.com/store/apps/details?id=com.receipters.app" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <Image 
              src="/assets/google-play.svg" 
              alt="Google Play Store" 
              width={160} 
              height={48} 
              priority 
            />
            {/* <span className="mt-2 text-base sm:text-lg text-gray-800 font-medium">Google Play</span> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DownloadPage;
