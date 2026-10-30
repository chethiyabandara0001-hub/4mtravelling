import React from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';

export const TermsPage: React.FC = () => {
  const { siteConfig } = useCMS();

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
            Clear, honest terms for every booking with {siteConfig.brandName}.
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
              <p className="whitespace-pre-line">{siteConfig.refundPolicy}</p>
            </div>

            <div id="privacy-policy" className="scroll-mt-24 space-y-4 pt-6 border-t border-black/10">
              <h2 className="font-serif text-2xl font-bold text-[#141413]">Privacy Policy</h2>
              <p className="whitespace-pre-line">{siteConfig.privacyPolicy}</p>
            </div>

            <div
              id="terms-and-conditions"
              className="scroll-mt-24 space-y-4 pt-6 border-t border-black/10"
            >
              <h2 className="font-serif text-2xl font-bold text-[#141413]">
                Terms and Conditions
              </h2>
              <p className="whitespace-pre-line">{siteConfig.termsConditions}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
