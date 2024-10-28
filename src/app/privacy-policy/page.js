import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Thar Dairy</title>
        <meta
          name="description"
          content="Privacy Policy for Thar Dairy website"
        />
      </Head>
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">
            Welcome to Thar Dairy. This Privacy Policy document outlines the
            types of personal information collected by us and how we use and
            protect that information.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information such as your name, email
            address, and any other data necessary for the use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            2. Use of Information
          </h2>
          <p className="mb-4">
            The information we collect is used for purposes such as improving
            our services, processing orders, and sending updates.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            3. Data Protection
          </h2>
          <p className="mb-4">
            We implement appropriate security measures to safeguard your
            personal data from unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies</h2>
          <p className="mb-4">
            Our website uses cookies to enhance user experience and improve
            functionality. You can disable cookies in your browser settings if
            preferred.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            5. Third-Party Services
          </h2>
          <p className="mb-4">
            We may use third-party services, such as Google Analytics, to
            analyze website traffic. These services may collect information in
            accordance with their privacy policies.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Consent</h2>
          <p className="mb-4">
            By using our website, you consent to our Privacy Policy. If you do
            not agree with any part of this policy, please discontinue use of
            the website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            7. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page, and we encourage you to review this page
            periodically.
          </p>

          <p className="mt-6">
            If you have any questions about our Privacy Policy, please{" "}
            <a href="/contact-us" className="text-blue-500 hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
