'use client';

import { Smile, Zap, ShieldCheck, Leaf, Globe, Users, TrendingUp } from "lucide-react";
import { useTranslation } from 'react-i18next';


export default function AboutPage() {
  const { t } = useTranslation('common');

  return (
    <div className="font-sans text-gray-800">
      {/* About Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">{t('about.hero.title')}</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-700 mb-4 sm:mb-6">{t('about.hero.subtitle')}</p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.hero.description')}
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-2">{t('about.values.subtitle')}</p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{t('about.values.title')}</h3>
          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            {t('about.values.description')}
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          <ValueCard
            icon={<Smile size={28} className="text-green-400 sm:w-9 sm:h-9" />}
            title="Simplicity"
            description={t('about.values.simplicity.description')}
          />
          <ValueCard
            icon={<Zap size={28} className="text-yellow-400 sm:w-9 sm:h-9" />}
            title="Efficiency"
            description={t('about.values.efficiency.description')}
          />
          <ValueCard
            icon={<ShieldCheck size={28} className="text-blue-400 sm:w-9 sm:h-9" />}
            title="Security"
            description={t('about.values.security.description')}
          />
          <ValueCard
            icon={<Leaf size={28} className="text-lime-400 sm:w-9 sm:h-9" />}
            title="Sustainability"
            description={t('about.values.sustainability.description')}
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Globe className="mx-auto text-blue-500 mb-4" size={32} />
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t('about.problem.title')}</h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
            {t('about.problem.description1')}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('about.problem.description2', { model: t('about.problem.model') })}
          </p>
        </div>
      </section>

      {/* Vision and Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <ShieldCheck className="text-green-600 mb-4" size={28} />
            <h3 className="text-2xl sm:text-3xl mb-4">{t('about.mission.title')}</h3>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
          <div className="mb-8 sm:mb-12">
            <TrendingUp className="text-indigo-600 mb-4" size={28} />
            <h3 className="text-2xl sm:text-3xl mb-4">{t('about.vision.title')}</h3>
            <p className="font-sans text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              {t('about.vision.description')}
            </p>
          </div>
          <div>
            <Users className="text-purple-600 mb-4" size={28} />
            <h3 className="text-2xl sm:text-3xl mb-4">{t('about.story.title')}</h3>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-sans">
              {t('about.story.description')}
            </p>
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
    <div className="bg-gray-800 p-4 sm:p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition">
      <div className="mb-3 sm:mb-4 flex justify-center">{icon}</div>
      <h4 className="text-lg sm:text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  );
}
