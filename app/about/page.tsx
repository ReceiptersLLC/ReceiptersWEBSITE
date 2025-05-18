// import TeamMember from "@/app/about/components/TeamMember";
import {Smile, Zap, ShieldCheck, Leaf, Globe, Users, TrendingUp} from "lucide-react";
import {ReactNode} from "react";

export default function page() {
  return (
    <div className="font-sans text-gray-800">

      {/* About Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">Why Receipters?</h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-6">Welcome to Receipters – The Future of Receipts</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In a world where cluttered drawers and lost receipts are still common, Receipters brings simplicity,
            security, and smart technology to the way receipts are handled. Our mission is to eliminate paper waste,
            streamline expense tracking, and empower users with secure, real-time access to their transactions—anytime,
            anywhere.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Our Core Values</p>
          <h3 className="text-4xl font-bold">What Drives Receipters</h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            We believe in building a digital future where every receipt is more than a record—it&#39;s a resource. Our
            values guide how we create, connect, and innovate for businesses and individuals alike.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <ValueCard icon={<Smile size={36} className="text-green-400"/>} title="Simplicity"
                     description="We keep it easy for anyone to use Receipters, no matter their tech skills."/>
          <ValueCard icon={<Zap size={36} className="text-yellow-400"/>} title="Efficiency"
                     description="No more lost receipts or manual entries—just seamless automation."/>
          <ValueCard icon={<ShieldCheck size={36} className="text-blue-400"/>} title="Security"
                     description="We protect your data with industry-grade encryption and privacy-first design."/>
          <ValueCard icon={<Leaf size={36} className="text-lime-400"/>} title="Sustainability"
                     description="Helping the world go paperless—because the environment matters."/>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Globe className="mx-auto text-blue-500 mb-4" size={40}/>
          <h3 className="text-3xl font-bold mb-4">Solving a Global Problem</h3>
          <p className="text-lg text-gray-700 mb-4">
            Paper receipts are expensive, wasteful, and inconvenient. Receipters replaces them with smart, digital
            alternatives—cutting costs, reducing environmental waste, and improving customer experience.
          </p>
          <p className="text-lg text-gray-700">
            Our dual model—Software-as-a-Product (SaaP) and Software-as-a-Service (SaaS)—serves both vendors and
            end-users, delivering security, accessibility, and efficiency across the board.
          </p>
        </div>
      </section>

      {/* Vision & Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <TrendingUp className="text-indigo-600 mb-4" size={36}/>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg">
              To become the global standard for digital receipting—where receipts aren’t just stored, but transformed
              into smart tools for tracking, analyzing, and improving financial well-being.
            </p>
          </div>
          <div>
            <Users className="text-purple-600 mb-4" size={36}/>
            <h3 className="text-3xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-700 text-lg">
              Receipters was born out of necessity: a modern solution to outdated, wasteful practices. From simplifying
              returns to preparing taxes or reducing fraud, Receipters transforms each receipt into meaningful data—for
              consumers and businesses alike.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            A passionate and driven group committed to redefining the way the world handles receipts.
          </p>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <TeamCard name="Gordon Odira" title="CEO" img="/assets/gordon.jpg"/>
            <TeamCard name="George Osewe" title="Head of Operations & Communications" img="/assets/george.jpg"/>
            <TeamCard name="Jeffrey Dozva" title="Tech Lead" img="/assets/jeffrey.jpg"/>
            <TeamCard name="Prof. Joshua O. Agola" title="Senior Advisor, Tech" img="/assets/prof.jpg"/>
          </div>
        </div>
      </section>

    </div>
  );
}

interface ValueCardProps {
  icon?: ReactNode
  title: string
  description: string
}

function ValueCard({icon, title, description}: ValueCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

interface TeamCardProps {
  name: string
  title: string
  img: string
}

function TeamCard({name, title, img}: TeamCardProps) {
  return (
    <div className="text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={name} className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"/>
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
}
