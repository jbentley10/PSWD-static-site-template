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
import { Hero } from "pswd-design-system";
import ServiceRow from "@/components/service-row";

// Import and set interfaces
import { SimplifiedBlock } from "@/lib/contentfulData";

export interface HeroBlockFields {
  heading: string;
  subHeading: string;
  buttonText: string;
  buttonLink: string;
}

export interface ServiceRowBlockFields {
  heading1: string;
  subheading1: string;
  heading2: string;
  subheading2: string;
  heading3: string;
  subheading3: string;
}

export interface ContentProps {
  englishBlocks: SimplifiedBlock[];
  spanishBlocks: SimplifiedBlock[];
}

const BlockByType: React.FC<SimplifiedBlock> = ({ sys, fields }) => {
  // Get the content type from the block content properties
  const contentType = sys.contentType.sys.id;

  switch (contentType) {
    case "heroBlock":
      // Type assertion to tell TypeScript that fields is HeroBlockFields
      let { heading, subHeading, buttonText, buttonLink } =
        fields as HeroBlockFields;

      return (
        <Hero
          heading={heading}
          subheading={subHeading}
          buttonText={buttonText}
          buttonLink={buttonLink}
        />
      );

    case "serviceRowBlock":
      // Type assertion to tell TypeScript that fields is ServiceRowBlockFields
      const {
        heading1,
        subheading1,
        heading2,
        subheading2,
        heading3,
        subheading3,
      } = fields as ServiceRowBlockFields;

      return (
        <ServiceRow
          heading1={heading1}
          subheading1={subheading1}
          heading2={heading2}
          subheading2={subheading2}
          heading3={heading3}
          subheading3={subheading3}
        />
      );

    default:
      return false;
  }
};

// Component recieves a single array of block objects
export default function Content({
  englishBlocks,
  spanishBlocks,
}: ContentProps) {
  const isEnglish = useContext(LocaleContext);
  const [translatedBlocks, setTranslatedBlocks] =
    useState<SimplifiedBlock[]>(englishBlocks);

  useEffect(() => {
    setTranslatedBlocks(isEnglish?.isEnglish ? englishBlocks : spanishBlocks);
  }, [isEnglish?.isEnglish, englishBlocks, spanishBlocks]);

  return (
    <>
      {translatedBlocks.map((block, index) => (
        <BlockByType key={index} {...block} />
      ))}
    </>
  );
}
