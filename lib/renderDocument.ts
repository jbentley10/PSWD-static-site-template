/**
 * @file renderDocument.js
 */

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

export const renderDocument = (document) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Image
          src={`https:${node.data?.target?.fields?.file?.url}`}
          alt={node.data?.target?.fields?.title}
          width={node.data?.target?.fields?.file?.details?.image?.width}
          height={node.data?.target?.fields?.file?.details?.image?.height}
        />
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p>{children}</p>
      )
    },
    renderText: (text) =>
			text.split("\n").flatMap((text, i) => [i > 0 && <br key={Math.random()} />, text]),
  };

  return documentToReactComponents(document, options);
};