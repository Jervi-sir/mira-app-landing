import React from 'react';

export const FooterSection = () => {
  return (
    <>
      <footer className="bg-teal-200/70">
        <div className="container mx-auto px-4 py-10 text-center text-sm">
          © {new Date().getFullYear()} Mira. All rights reserved.
        </div>
      </footer>
    </>
  );
};