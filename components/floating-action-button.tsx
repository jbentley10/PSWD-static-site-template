/**
 * @file floating-action-button.tsx
 */
"use client";

// Import dependencies
import { useContext } from "react";
import { LocaleContext } from "../app/locale-provider";
import { GrLanguage } from "react-icons/gr";
import { Button } from "./ui/button";

const FloatingActionButton = () => {
  const isEnglish = useContext(LocaleContext);

  return (
    <div
      className={
        "floating-action-button fixed lg:bottom-14 lg:right-14 xs:bottom-9 xs:right-9"
      }
    >
      <Button
        aria-label="add"
        onClick={() => isEnglish.setIsEnglish((oldValue) => !oldValue)}
      >
        <GrLanguage className={'mr-2'} />
        {isEnglish.isEnglish ? "Leer en Español" : "Read in English"}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
