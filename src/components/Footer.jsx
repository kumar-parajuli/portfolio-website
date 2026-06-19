import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md py-4 mt-10">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-sm text-white-100/70 text-center">
          © {new Date().getFullYear()} Kumar Parajuli • All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
