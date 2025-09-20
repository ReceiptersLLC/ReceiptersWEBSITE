'use client';

import React from 'react';

export default function page() {
  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: 1 November 2024</p>

      <p className="mb-4">
        Receipters (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you use our application and services. Please read
        this policy carefully to understand our practices regarding your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
      <p className="mb-4">We collect various types of information to improve our services, personalize user experience,
        and provide necessary functionalities. This includes:</p>

      <h3 className="text-lg font-semibold mb-2">a. Personal Information</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Billing Information (including payment card details and billing address, processed securely by third-party
          payment processors)
        </li>
        <li>User Credentials (for account creation and authentication purposes)</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">b. Financial Data</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Transaction Data: Information on purchases, amounts, dates, locations, and merchant details from receipts.
        </li>
        <li>Payment Integration Data (if connected): Credit card details and transaction records
          to sync purchase history.
        </li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">c. Device and Usage Information</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Device Details: Type of device, operating system, unique device identifiers, and browser type.</li>
        <li>Usage Data: Time and frequency of app usage, features accessed, crash data, and performance logs.</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">d. Location Information</h3>
      <p className="mb-4">Precise or Approximate Location: With your permission, we may collect location data to provide
        relevant insights and improve user experience.</p>

      <h3 className="text-lg font-semibold mb-2">e. Cookies and Tracking Technologies</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Cookies and Local Storage: We use cookies to save your preferences and understand how you interact with our
          service.
        </li>
        <li>Analytics Data: Information collected through third-party analytics tools (e.g., Google Analytics) to track
          user behavior and improve our services.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">We may use the collected information for various purposes, including:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Account Management: Creating and managing your account, verifying your identity, and providing customer
          support.
        </li>
        <li>Transaction Management: Organizing and categorizing purchase records for
          easy access and reporting.
        </li>
        <li>Improving Services: Analyzing usage data to enhance app functionality, develop new features, and ensure
          platform security.
        </li>
        <li>Communications: Sending account-related notifications, updates on policies, marketing, and promotional
          materials.
        </li>
        <li>Compliance and Legal Obligations: To comply with laws, regulations, and legal requests, and to prevent fraud
          or misuse of our services.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">3. How We Share Your Information</h2>
      <p className="mb-4">We do not sell or share your personal information with third parties, except in the following
        circumstances:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <span className="font-semibold">Service Providers:</span> We may share information with trusted third-party
          vendors (e.g., payment processors, cloud storage providers) that assist in our operations.
        </li>
        <li>
          <span className="font-semibold">Legal Compliance:</span> We may disclose information if required by law, or in
          response to valid legal requests from authorities.
        </li>
        <li>
          <span className="font-semibold">Business Transfers:</span> In the event of a merger, acquisition, or asset
          sale, user information may be transferred as part of the transaction.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">4. Data Security</h2>
      <p className="mb-4">We implement robust security measures to protect your data from unauthorized access,
        alteration, and loss, including encryption, regular security audits, and access controls. However, no
        internet-based service is completely secure, and we cannot guarantee absolute security.</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">5. Data Retention</h2>
      <p className="mb-4">We retain your personal information only for as long as necessary to fulfill the purposes
        outlined in this Privacy Policy or as required by law. You may request deletion of your information at any time
        by contacting us at <a href="mailto:dpo@receipter.com" className="text-blue-500">dpo@receipter.com</a>.</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">6. Your Rights and Choices</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Access and Correction: You can access and update your personal information within your account settings.
        </li>
        <li>Deletion: You may request deletion of your personal information, subject to legal requirements.</li>
        <li>Data Portability: You may request a copy of your data in a commonly used format.</li>
        <li>Withdraw Consent: Where consent is required for data collection, you may withdraw it at any time by
          adjusting your settings.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4">7. Children’s Privacy</h2>
      <p className="mb-4">Our services are not intended for children under 13. We do not knowingly collect personal
        information from children under 13. If you become aware of any data collected from a child under 13, please
        contact us immediately at <a href="mailto:dpo@receipter.com" className="text-blue-500">dpo@receipter.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4">8. Changes to This Privacy Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by
        posting the new Privacy Policy on this page and updating the “Effective Date” above. You are advised to review
        this policy periodically for any updates.</p>

      <h2 className="text-xl font-semibold mt-6 mb-4">9. Contact Us</h2>
      <p className="mb-4">If you have any questions or concerns about this Privacy Policy or our data practices, please
        contact us at:</p>
      <address className="not-italic mb-4">
        <p>Receipters</p>
        <p>Email: <a href="mailto:dpo@receipter.com" className="text-blue-500">dpo@receipter.com</a></p>
        <p>Phone: +254 700 031512</p>
      </address>

      <p className="text-sm text-gray-600">This Privacy Policy outlines how Receipters prioritizes your privacy,
        ensuring transparency and accountability in handling your personal information.</p>
    </div>
  );
};
