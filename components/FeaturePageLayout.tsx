"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface FeaturePageLayoutProps {
    slug: string;
}

export default function FeaturePageLayout({ slug }: FeaturePageLayoutProps) {
    const router = useRouter();
    const { t } = useTranslation('common');
    const prefix = `features.${slug}.page`;

    // Helper to render list items if they exist
    const renderList = (sectionKey: string) => {
        const listItems: string[] = [];
        for (let j = 1; j <= 20; j++) {
            const k = `${prefix}.${sectionKey}.item${j}`;
            const val = t(k);
            if (val !== k) {
                listItems.push(val);
            } else {
                break;
            }
        }

        if (listItems.length === 0) return null;

        return (
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{t(`${prefix}.${sectionKey}.title`)}</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {listItems.map((item, index) => {
                        const [boldPart, ...rest] = item.split(':');
                        if (rest.length > 0) {
                            return (
                                <li key={index}>
                                    <strong>{boldPart}:</strong> {rest.join(':')}
                                </li>
                            );
                        }
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </section>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 p-8">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => router.back()}
                    className="mb-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-colors">
                    {t('features.page.goBack')}
                </button>

                <div className="bg-white p-10 rounded-xl shadow-lg">
                    <h1 className="text-4xl font-bold mb-4 text-center">{t(`${prefix}.title`)}</h1>
                    <p className="text-xl text-gray-600 mb-8 text-center">{t(`${prefix}.subtitle`)}</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{t(`${prefix}.overview.title`)}</h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t(`${prefix}.overview.content`)}
                        </p>
                    </section>

                    {renderList('keyFeatures')}
                    {renderList('keyFeaturesMerchant')}
                    {renderList('keyFeaturesConsumer')}
                    {renderList('keyCapabilities')}
                    {renderList('benefitsBusiness')}
                    {renderList('benefitsConsumer')}

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">{t(`${prefix}.idealFor.title`)}</h2>
                        <p className="text-gray-700">
                            {t(`${prefix}.idealFor.content`)}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
