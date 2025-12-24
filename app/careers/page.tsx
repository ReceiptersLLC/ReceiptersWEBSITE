'use client';

import { useTranslation } from 'react-i18next';
import { Briefcase, MapPin, ArrowRight, Globe, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
    const { t } = useTranslation('common');

    const jobs = [
        {
            id: 1,
            title: t('careers.job1.title'),
            location: t('careers.job1.location'),
            description: t('careers.job1.description'),
            type: 'Full-time',
        },
        {
            id: 2,
            title: t('careers.job2.title'),
            location: t('careers.job2.location'),
            description: t('careers.job2.description'),
            type: 'Remote',
        },
        {
            id: 3,
            title: t('careers.job3.title'),
            location: t('careers.job3.location'),
            description: t('careers.job3.description'),
            type: 'Full-time',
        },
    ];

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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Join Receipters?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We're a fast-growing team dedicated to making a positive impact on the world through technology.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Globe className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Global Impact</h3>
                            <p className="text-gray-400">Work on solutions that solve real-world problems for millions of people across Africa and beyond.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Zap className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Fast-Paced Innovation</h3>
                            <p className="text-gray-400">Be part of a dynamic environment where your ideas are heard and you can make a tangible difference.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Heart className="text-white" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Inclusive Culture</h3>
                            <p className="text-gray-400">Join a diverse team that values collaboration, creativity, and personal growth.</p>
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
                    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                        {jobs.length} Open Roles
                    </span>
                </div>
                <div className="space-y-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{job.type}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={16} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Briefcase size={16} />
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {job.description}
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Link href={`/careers/${job.id}`} className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all group-hover:scale-105">
                                        Apply Now <ArrowRight size={18} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don't see a role that fits?</h2>
                    <p className="text-blue-100 text-lg mb-10">
                        We're always looking for talented individuals to join our mission. Send us your resume and we'll keep you in mind for future openings.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
