/**
 * @file content.tsx
 */
"use client";

// Component that's called from inside page.js
// All it does is look at each content block,
// and assign it the appropriate React component(s)

// Import depdencies
import { useState, useContext, useEffect } from "react";

// Import components
import { LocaleContext } from "./locale-provider";
import Hero from "@/components/hero";

const blockByType = (block: any) => {
  // Get the content type from the block content properties
  const contentType = block.sys.contentType.sys.id;

  switch (contentType) {
    case "exampleBlock":
      return <div id="example-block" className="bg-red" />;

    case "heroBlock":
      console.log(block)
      return (
        <Hero
          heading={block.fields.heading}
          subheading={block.fields.subHeading}
          buttonText={block.fields.buttonText}
          buttonLink={block.fields.buttonLink}
        />
      );

    default:
      return false;
  }
};

// Component recieves a single array of block objects
export default function Content({ englishBlocks, spanishBlocks }) {
  const isEnglish = useContext(LocaleContext);
  const [translatedBlocks, setTranslatedBlocks] = useState(englishBlocks);

  useEffect(() => {
    isEnglish.isEnglish === true
      ? setTranslatedBlocks(englishBlocks)
      : setTranslatedBlocks(spanishBlocks);
  }, [isEnglish.isEnglish, englishBlocks, spanishBlocks]);

  return (
    translatedBlocks &&
    translatedBlocks.map((block: any) => {
      return blockByType(block);
    })
  );
}
