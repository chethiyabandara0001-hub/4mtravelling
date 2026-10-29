import React from 'react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <div>
      <section className="bg-[#141413] text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ol className="flex items-center gap-2 text-xs text-white/60 mb-3">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#f5c56b]">Terms & Privacy</li>
          </ol>
          <span className="font-hand text-2xl text-[#f5c56b] block">Legal</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-1">
            Terms, refund & <em className="italic font-normal text-[#f5c56b]">privacy policy</em>
          </h1>
          <p className="text-white/80 mt-3 text-sm md:text-base">
            Clear, honest terms for every booking with 4Me Lanka Tours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            <a
              href="#refund-policy"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-black/10 hover:border-[#c88a2b]"
            >
              Refund Policy
            </a>
            <a
              href="#privacy-policy"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-black/10 hover:border-[#c88a2b]"
            >
              Privacy Policy
            </a>
            <a
              href="#terms-and-conditions"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-black/10 hover:border-[#c88a2b]"
            >
              Terms and Conditions
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/10 shadow-xs space-y-8 text-sm text-[#3d3a36] leading-relaxed">
            <div id="refund-policy" className="scroll-mt-24 space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#141413]">Refund Policy</h2>
              <p>
                Since you booked after you had received all of our tour information and we have
                already assigned a car and driver-guide for your tour, there will be no refund of
                the $150 prepayment.
              </p>
            </div>

            <div id="privacy-policy" className="scroll-mt-24 space-y-4 pt-6 border-t border-black/10">
              <h2 className="font-serif text-2xl font-bold text-[#141413]">Privacy Policy</h2>
              <p>
                At 4Me Lanka Tours, we are committed to protecting the privacy and security of our
                customers’ personal information. This Privacy Policy outlines how we collect, use,
                and safeguard your information when you visit or make a booking on our website. By
                using our website, you consent to the practices described in this policy.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#141413]">
                Information We Collect
              </h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Personal identification information (such as your name, email address, and phone
                  number) provided voluntarily by you during the booking process.
                </li>
                <li>
                  Payment and billing information necessary to process your booking, which is
                  securely handled by trusted payment processors.
                </li>
                <li>
                  Browsing information, such as your IP address, browser type, and device
                  information, collected automatically using cookies and similar technologies.
                </li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-[#141413]">Use of Information</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To process and fulfill your tour booking.</li>
                <li>
                  To communicate with you regarding your itinerary, provide customer support, and
                  respond to inquiries or requests.
                </li>
                <li>
                  To personalize your booking experience and present relevant services and
                  recommendations.
                </li>
                <li>
                  To improve our website, bookings, and services based on your feedback.
                </li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-[#141413]">Information Sharing</h3>
              <p>
                We respect your privacy and do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except with trusted service
                providers (such as hotels or activity operators included in your itinerary) or when
                required by law.
              </p>
            </div>

            <div
              id="terms-and-conditions"
              className="scroll-mt-24 space-y-4 pt-6 border-t border-black/10"
            >
              <h2 className="font-serif text-2xl font-bold text-[#141413]">
                Terms and Conditions
              </h2>
              <p>
                Welcome to www.4melankatours.com. These Terms and Conditions govern your use of our
                website and the booking of tours from our platform.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#141413]">Use of the Website</h3>
              <p>A. You must be at least 18 years old to use our website or make a booking.</p>
              <p>
                B. You agree to provide accurate and current information during the booking process.
              </p>
              <p>C. You may not use our website for any unlawful or unauthorized purposes.</p>

              <h3 className="font-serif text-lg font-bold text-[#141413]">
                Bookings and Payments
              </h3>
              <p>
                A. Once the itinerary is finalized and agreed upon, a $150 non-refundable advance
                payment secures your vehicle and driver-guide.
              </p>
              <p>
                B. The remaining balance is settled in two stages: 60% upon arrival in Sri Lanka and
                40% the day before departure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
