'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight, Megaphone } from 'lucide-react';
import BlogModal from '@/components/BlogModal';

export default function AnnouncementPage() {
    const { t } = useTranslation('common');
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<number | null>(null);

    const announcements = [
        {
            id: 1,
            title: t('announcements.post1.title'),
            excerpt: t('announcements.post1.excerpt'),
            date: t('announcements.post1.date'),
            author: 'Receipters Team',
            category: 'Event',
            content: t('announcements.post1.content'),
        },
        {
            id: 2,
            title: t('announcements.post2.title'),
            excerpt: t('announcements.post2.excerpt'),
            date: t('announcements.post2.date'),
            author: 'Receipters Team',
            category: 'Partnership',
            content: t('announcements.post2.content'),
        },
    ];

    const selectedData = selectedAnnouncement ? announcements.find(a => a.id === selectedAnnouncement) : null;

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <section className="bg-white border-b border-gray-200 py-16 sm:py-24 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-6">
                        <Megaphone size={32} />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        {t('announcements.hero.title')}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t('announcements.hero.description')}
                    </p>
                </div>
            </section>

            {/* Announcements Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {announcements.map((announcement) => (
                        <article key={announcement.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-4 text-xs font-medium text-blue-600 mb-4 uppercase tracking-wider">
                                    <span>{announcement.category}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                    {announcement.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                                    {announcement.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{announcement.date}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedAnnouncement(announcement.id)}
                                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 group text-sm sm:text-base transition-colors"
                                    >
                                        Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {selectedData && (
                <BlogModal
                    post={selectedData}
                    onClose={() => setSelectedAnnouncement(null)}
                />
            )}
        </div>
    );
}
