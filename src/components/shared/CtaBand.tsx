import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { SmartImage } from './SmartImage';

interface CtaBandProps {
  kicker?: string;
  title?: string;
  accent?: string;
  description?: string;
  showEmail?: boolean;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  kicker = 'Your journey, our promise',
  title = 'Ready to say',
  accent = 'Ayubowan?',
  description = 'Tell Kura your dates, interests and budget — he will shape a private itinerary around you. Asking is free and there is no obligation.',
  showEmail = false,
}) => {
  const { siteConfig } = useCMS();

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-[#141413] text-white p-8 md:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
          <SmartImage
            src={
              siteConfig.ctaBannerImage ||
              'https://4melankatours.com/wp-content/uploads/2024/06/ella-banner-5.webp'
            }
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-10 max-w-2xl">
            <span className="font-hand text-2xl text-[#f5c56b] block mb-1">{kicker}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              {title} <em className="italic font-normal text-[#f5c56b]">{accent}</em>
            </h2>
            <p className="text-white/80 mt-3 text-sm md:text-base leading-relaxed">{description}</p>
          </div>
          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-[#c88a2b] hover:bg-[#b3781f] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition"
            >
              Plan my trip <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3.5 rounded-full text-sm transition"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Kura
            </a>
            {showEmail ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-full text-sm transition border border-white/20"
              >
                <Mail className="w-4 h-4" /> Email Kura
              </a>
            ) : (
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-full text-sm transition border border-white/20"
              >
                <Phone className="w-4 h-4" /> {siteConfig.phoneDisplay}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
