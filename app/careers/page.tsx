'use client';

import { useTranslation } from 'react-i18next';
import { Globe, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
    const { t } = useTranslation('common');

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
                        {t('careers.hero.title')}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t('careers.hero.description')}
                    </p>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-20 bg-gray-900 text-white px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('careers.whyJoin.title')}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {t('careers.whyJoin.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Globe className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{t('careers.whyJoin.globalImpact.title')}</h3>
                            <p className="text-gray-400">{t('careers.whyJoin.globalImpact.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Zap className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{t('careers.whyJoin.innovation.title')}</h3>
                            <p className="text-gray-400">{t('careers.whyJoin.innovation.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Heart className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{t('careers.whyJoin.culture.title')}</h3>
                            <p className="text-gray-400">{t('careers.whyJoin.culture.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
                    <h2 className="text-3xl font-bold text-gray-900">
                        {t('careers.openings.title')}
                    </h2>
                </div>
                <div className="text-center py-16">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            {t('careers.comingSoon.title')}
                        </h3>
                        <p className="text-gray-600 text-lg">
                            {t('careers.comingSoon.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('careers.cta.title')}</h2>
                    <p className="text-blue-100 text-lg mb-10">
                        {t('careers.cta.description')}
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                        {t('careers.cta.button')}
                    </Link>
                </div>
            </section>
        </div>
    );
}
