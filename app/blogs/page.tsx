'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowRight } from 'lucide-react';
import BlogModal from '@/components/BlogModal';

export default function BlogsPage() {
    const { t } = useTranslation('common');
    const [selectedPost, setSelectedPost] = useState<number | null>(null);

    const posts = [
        {
            id: 1,
            title: t('blogs.post1.title'),
            excerpt: t('blogs.post1.excerpt'),
            date: 'Dec 20, 2025',
            author: 'Gordon Odira',
            category: 'Technology',
            content: t('blogs.post1.content'),
        },
        {
            id: 2,
            title: t('blogs.post2.title'),
            excerpt: t('blogs.post2.excerpt'),
            date: 'Dec 15, 2025',
            author: 'George Osewe',
            category: 'Sustainability',
            content: t('blogs.post2.content'),
        },
        {
            id: 3,
            title: t('blogs.post3.title'),
            excerpt: t('blogs.post3.excerpt'),
            date: 'Dec 10, 2025',
            author: 'Protas Junior',
            category: 'AI & Data',
            content: t('blogs.post3.content'),
        },
    ];

    const selectedPostData = selectedPost ? posts.find(p => p.id === selectedPost) : null;

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <section className="bg-white border-b border-gray-200 py-16 sm:py-24 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        {t('blogs.hero.title')}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t('blogs.hero.description')}
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
                    {t('blogs.posts.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-4 text-xs font-medium text-blue-600 mb-4 uppercase tracking-wider">
                                    <span>{post.category}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3 text-sm sm:text-base">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedPost(post.id)}
                                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 group text-sm sm:text-base transition-colors"
                                    >
                                        Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {selectedPostData && (
                <BlogModal
                    post={selectedPostData}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </div>
    );
}
