import React from 'react';
import { useTranslation } from 'react-i18next';
import "@/i18n";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-6">
      {/* Section 1: Text and Image */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-semibold text-gray-900">{t('About.1')}</h1>
          <p className="text-lg text-gray-700">{t('About.2')}</p>
          <p className="text-lg text-gray-700">{t('About.3')}</p>
          <p className="text-lg text-gray-700">{t('About.4')}</p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
            <img 
              src="https://cdn.thezebra.com/zfront/media/production/images/car-repair-costs-hero_1_1.width-1500.format-jpeg.jpg" 
              alt={t('About.ImageAltText')} 
              className="w-full h-auto transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Location */}
      <div className="mt-24 flex flex-col items-center">
        <h2 className="text-3xl  font-semibold text-gray-900 mb-6">{t('About.WhereWeAre')}</h2>
        <div className="w-full max-w-3xl">
          <iframe 
            className="w-full h-[450px] rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d338.3652705163499!2d68.74755145693481!3d38.54159672782113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1731935927940!5m2!1sru!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
