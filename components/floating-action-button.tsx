/**
 * @file floating-action-button.tsx
 */
"use client";

// Import dependencies
import { useContext } from "react";
import { LocaleContext } from "../app/locale-provider";
import { GrLanguage } from "react-icons/gr";

const FloatingActionButton = () => {
  const isEnglish = useContext(LocaleContext);

  return (
    <div
      className={
        "floating-action-button fixed lg:bottom-14 lg:right-14 xs:bottom-9 xs:right-9"
      }
    >
      <button
        aria-label="add"
        onClick={() => isEnglish.setIsEnglish((oldValue) => !oldValue)}
        className={`flex items-center bg-white px-8 py-3 rounded-full border-2 border-gradient-red font-display`}
      >
        <GrLanguage className={'mr-2'} />
        {isEnglish.isEnglish ? "Leer en Español" : "Read in English"}
      </button>
    </div>
  );
};

export default FloatingActionButton;
