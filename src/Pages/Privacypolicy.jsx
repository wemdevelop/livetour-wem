import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-6">
        Welcome to <strong>LivetourPRO</strong>, a travel and tourism CRM. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our travel and tourism Customer Relationship Management (CRM) software.
      </p>
      <p className="mb-6">
        Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the software.
      </p>
      <p className="mb-6">
        By accessing or using LivetourPRO, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>

      <h3 className="font-semibold mb-2">Personal Information</h3>
      <p className="mb-4">We may collect personal information that you provide directly to us, such as:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Payment information</li>
        <li>Travel preferences and history</li>
      </ul>

      <h3 className="font-semibold mb-2">Non-Personal Information</h3>
      <p className="mb-4">We may collect non-personal information about you whenever you interact with our CRM. This may include:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Browser type</li>
        <li>Device type</li>
        <li>IP address</li>
        <li>Operating system</li>
        <li>Access times</li>
        <li>Pages viewed</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">We use the collected information for various purposes, including:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide, operate, and maintain our services</li>
        <li>To improve, personalize, and expand our services</li>
        <li>To process transactions and send related information</li>
        <li>To communicate with you, including sending you updates and promotional materials</li>
        <li>To find and prevent fraud</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. How We Share Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>With Service Providers:</strong> We may share your information with third-party service providers to perform services on our behalf, such as payment processing and data analysis.
        </li>
        <li>
          <strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
        </li>
        <li>
          <strong>With Your Consent:</strong> We may share your information with third parties if you have given us your consent to do so.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Security</h2>
      <p className="mb-4">
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other types of misuse.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Your Data Protection Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have the following rights regarding your personal information:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Access:</strong> The right to request copies of your personal information.</li>
        <li><strong>Correction:</strong> The right to request that we correct any information you believe is inaccurate or incomplete.</li>
        <li><strong>Erasure:</strong> The right to request that we erase your personal information, under certain conditions.</li>
        <li><strong>Restrict Processing:</strong> The right to request that we restrict the processing of your personal information, under certain conditions.</li>
        <li><strong>Object to Processing:</strong> The right to object to our processing of your personal information, under certain conditions.</li>
        <li><strong>Data Portability:</strong> The right to request that we transfer your data to another organization, or directly to you, under certain conditions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">6. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:privacy@livetourpro.com" className="text-blue-600 underline">
          privacy@livetourPRO.com
        </a>
      </p>

      <p className="mt-10 text-sm text-gray-500">Last Updated: July 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
