// import TeamMember from "@/app/about/components/TeamMember";
import Image from "next/image";
import { Smile, Zap, ShieldCheck, Leaf } from "lucide-react";

export default function page() {
  return (
    <div className="font-sans text-gray-800">

            {/* About Hero Section */}
      <section className="bg-gradient-to-r text-gray py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Receipters?</h1>
          <p className="text-xl md:text-2xl mb-8">Welcome to Receipters – The Future of Receipts</p>
          <p className="text-gray-700 leading-relaxed text-xl mb-8">
            In a world where cluttered drawers and lost receipts are still common, Receipters was built to bring simplicity, security, and smart technology to the way receipts are handled. We are a digital receipting platform on a mission to eliminate paper waste, streamline expense tracking, and empower users with quick, secure access to their transaction history—anytime, anywhere.
          </p>
        </div>
      </section>


      {/* Our Values Section - Dark Theme with Icons */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase mb-2 tracking-widest text-gray-400">Our Core Values</p>
          <h3 className="text-4xl font-bold">What Drives Receipters</h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            We believe in building a digital future where every receipt is more than a record—it's a resource. Our values guide
            how we create, connect, and innovate for businesses and individuals alike.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <Smile size={36} className="mx-auto mb-4 text-green-400" />
            <h4 className="text-xl font-semibold mb-2">Simplicity</h4>
            <p className="text-gray-400">We keep it easy for anyone to use Receipters, no matter their tech skills.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <Zap size={36} className="mx-auto mb-4 text-yellow-400" />
            <h4 className="text-xl font-semibold mb-2">Efficiency</h4>
            <p className="text-gray-400">No more lost receipts or manual entries—just seamless automation.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <ShieldCheck size={36} className="mx-auto mb-4 text-blue-400" />
            <h4 className="text-xl font-semibold mb-2">Security</h4>
            <p className="text-gray-400">We protect your data with industry-grade encryption and privacy-first design.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <Leaf size={36} className="mx-auto mb-4 text-lime-400" />
            <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
            <p className="text-gray-400">Helping the world go paperless—because the environment matters.</p>
          </div>
        </div>
      </section>

      {/* About Vision & Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed text-xl mb-8">
            To become the go-to digital receipting platform that makes receipts useful, accessible, and impactful for individuals, businesses, and institutions globally.
          </p>

          <h3 className="text-3xl font-bold mb-6">Our Story</h3>
          <p className="text-gray-700 leading-relaxed text-xl mb-8">
            Receipters was born out of a need for better receipt management—both for customers who lose them and businesses that waste money printing them. We believe digital receipts shouldn’t just replace paper—they should do more. From smart analytics to tax prep, Receipters turns every receipt into a powerful tool.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 pt-16">Meet the Team</h2>
          <p className="text-gray-700 leading-relaxed text-lg text-center mb-12">
            We are a passionate team dedicated to making digital receipting simple and effective for everyone.
          </p>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center">
              <img src="/assets/download.jpeg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">Gordon Odira</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <img src="/assets/download.jpeg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">George Osewe</h3>
              <p className="text-gray-600">Head of Operations & Communications</p>
            </div>
            <div className="text-center">
              <img src="/assets/download.jpeg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">Jeffrey Dozva</h3>
              <p className="text-gray-600">Tech Lead</p>
            </div>
            <div className="text-center">
              <img src="/assets/download.jpeg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">Prof. Joshua O. Agola</h3>
              <p className="text-gray-600">Senior Advisor, Tech</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
