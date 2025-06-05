'use client';

import Image from "next/image";
import { Smile, Zap, ShieldCheck, Leaf, Globe, Users, TrendingUp } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation('common');

  return (
    <div className="font-sans text-gray-800">
      {/* About Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">{t('about.hero.title')}</h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-6">{t('about.hero.subtitle')}</p>
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
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">{t('about.values.subtitle')}</p>
          <h3 className="text-4xl font-bold">{t('about.values.title')}</h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            We believe in building a digital future where every receipt is more than a record—it&apos;s a resource. Our
            values guide how we create, connect, and innovate for businesses and individuals alike.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <ValueCard
            icon={<Smile size={36} className="text-green-400" />}
            title="Simplicity"
            description={t('about.values.simplicity.description')}
          />
          <ValueCard
            icon={<Zap size={36} className="text-yellow-400" />}
            title="Efficiency"
            description={t('about.values.efficiency.description')}
          />
          <ValueCard
            icon={<ShieldCheck size={36} className="text-blue-400" />}
            title="Security"
            description={t('about.values.security.description')}
          />
          <ValueCard
            icon={<Leaf size={36} className="text-lime-400" />}
            title="Sustainability"
            description={t('about.values.sustainability.description')}
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Globe className="mx-auto text-blue-500 mb-4" size={40} />
          <h3 className="text-3xl font-bold mb-4">{t('about.problem.title')}</h3>
          <p className="text-lg text-gray-700 mb-4">
            Paper receipts are expensive, wasteful, and inconvenient. Receipters replaces them with smart, digital
            alternatives—cutting costs, reducing environmental waste, and improving customer experience.
          </p>
          <p className="text-lg text-gray-700">
            Our dual model—{t('about.problem.model')}—serves both vendors and
            end-users, delivering security, accessibility, and efficiency across the board.
          </p>
        </div>
      </section>

      {/* Vision & Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <TrendingUp className="text-indigo-600 mb-4" size={36} />
            <h3 className="text-3xl font-bold mb-4">{t('about.vision.title')}</h3>
            <p className="text-gray-700 text-lg font-bold mb-4">
              Mission: To interface the business solutions, management and technology thereby streamlining the receipts to be totally digital
            </p>
            <p className="text-gray-700 text-lg">
              {t('about.vision.description')} To become the global standard for digital
              receipting—where receipts
              aren&apos;t just stored, but transformed into smart tools for tracking, analyzing, and improving financial
              well-being.
              </p>
          </div>
          <div>
            <Users className="text-purple-600 mb-4" size={36} />
            <h3 className="text-3xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-700 text-lg">
              {t('about.story.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('about.team.title')}</h2>
          <p className="text-gray-600 text-lg text-center mb-12">{t('about.team.subtitle')}</p>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            <TeamBioCard
              name="Gordon Odira"
              title="CEO & Founder"
              image="/assets/gordon.jpg"
              description="A senior Integration Engineer with over 8 years in federal, state, and private tech deployments. Holds a BSc in Electrical & Computer Engineering from Rutgers University and a Master's in Electrical and Computer Engineering from NJIT."
            />
            <TeamBioCard
              name="Fredrick George Osewe"
              title="Senior Consultant, Business Development Director and Communications"
              image="/assets/george.jpg"
              description="A government and policy expert who was part of Kenya's constitutional transition team in 2010. Specializes in restructuring business operations. Holds a degree in Development Communication."
            />
            <TeamBioCard
              name="Joffrey Dozva"
              title="Senior Engineer and Technical Lead"
              image="/assets/jeffrey.jpg"
              description="Lead developer of Receipters core systems. Has built hundreds of mobile apps and led health tech deployments across Africa. Graduate of Kenya Aeronautical College in Software Engineering."
            />
            <TeamBioCard
              name="Prof. Joshua O. Agola"
              title="CTO and Principal Architect"
              image="/assets/prof.jpg"
              description="Professor and Head of Software Engineering at JOOUST University. Expert in system architecture and cybersecurity. Leads Receipters' technical strategy and infrastructure security."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// COMPONENTS

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

interface TeamBioCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
}

function TeamBioCard({ name, title, image, description }: TeamBioCardProps) {
  return (
    <div className="flex gap-6 items-start">
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
        className="w-32 h-32 rounded-full object-cover shadow-md"
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-blue-600 mb-2 font-medium">{title}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
