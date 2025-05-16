import React from 'react';

// This is a generic pricing page with some example pricing tiers.
// You can customize this data and the rendering logic as needed.
const PricingPage: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      price: '$9',
      frequency: '/month',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ],
    },
    {
      name: 'Pro',
      price: '$29',
      frequency: '/month',
      features: [
        'All Basic features',
        'Advanced Feature 1',
        'Advanced Feature 2',
        'Advanced Feature 3',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      frequency: '',
      features: [
        'All Pro features',
        'Custom Feature 1',
        'Custom Feature 2',
        'Dedicated Support',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <h2 className="text-2xl font-semibold text-center mb-4">{tier.name}</h2>
            <p className="text-4xl font-bold text-center mb-4">{tier.price}{tier.frequency}</p>
            <ul className="flex-grow mb-8">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="mb-2 flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {tier.price === 'Contact Us' ? 'Contact Us' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;