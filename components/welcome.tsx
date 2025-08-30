import { Bowlby_One, Geist_Mono } from 'next/font/google';
import React from 'react';

const bowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400", // only weight available for this font
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const WelcomeSection = () => {
  return (
    <>
      <section
        className="relative bg-teal-200/70 h-[92vh]"
        style={{
          inset: 0,
          backgroundSize: '16px 16px',
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.2) 0px, rgba(180, 180, 180, 0.2) 1px, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 50%)'
        }}
      >
        <div className="container mx-auto px-4 py-12 md:py-16 h-full">
          <div className="rounded-none border-4 border-black bg-teal-200 p-8 md:p-14 h-full justify-center items-center flex flex-col gap-10">
            <h1 className={`${bowlbyOne.className} text-center text-4xl md:text-9xl font-extrabold tracking-tight`}>Welcome!</h1>
            <p className={`${geistMono.className} mt-2 text-center text-xl md:text-3xl font-bold`}>Mira Pet Services</p>
            <div className="mt-6 flex justify-center">
              <img src="mira_logo.svg" className="h-30 w-30" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};