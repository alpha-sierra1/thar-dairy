import React from "react";
import Head from "next/head";

const ReturnPolicy = () => {
  return (
    <>
      <Head>
        <title>Return Policy - Thar Dairy</title>
        <meta
          name="description"
          content="Return Policy for Thar Dairy products"
        />
      </Head>
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
          <p className="mb-4">
            Thank you for shopping with Thar Dairy. If you are not entirely
            satisfied with your purchase, we&apos;re here to help.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Returns</h2>
          <p className="mb-4">
            You have 30 calendar days to return an item from the date you
            received it. To be eligible for a return, your item must be unused
            and in the same condition that you received it. Your item must be in
            the original packaging.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. Refunds</h2>
          <p className="mb-4">
            Once we receive your item, we will inspect it and notify you that we
            have received your returned item. We will immediately notify you of
            the status of your refund after inspecting the item.
          </p>
          <p className="mb-4">
            If your return is approved, we will initiate a refund to your
            original method of payment. You will receive the credit within a
            certain number of days, depending on your card issuer&apos;s
            policies.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Shipping</h2>
          <p className="mb-4">
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are non-refundable. If you
            receive a refund, the cost of return shipping will be deducted from
            your refund.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Exceptions</h2>
          <p className="mb-4">
            Certain items cannot be returned, such as perishable goods (e.g.,
            food products like ghee). We also do not accept returns for
            hazardous materials, flammable liquids, or gases.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions on how to return your item to us, please{" "}
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

export default ReturnPolicy;
