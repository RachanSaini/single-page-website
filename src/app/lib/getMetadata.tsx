import { contentfulClient } from "./contentfulClient";
import { Metadata } from "next";
import { MetadataFields } from "../types/metadata";

export async function getMetadata(): Promise<Metadata> {
  try {
    const metadataData = await contentfulClient.getEntries({ content_type: "metadata" });

    if (!metadataData.items.length) {
      console.warn("Metadata not found in Contentful");
      return {
        title: "Turban King - Turban Tying Services",
        description: "Get turban tying services for weddings, graduations, and special occasions with expert guidance.",
        openGraph: {
          title: "Turban King - Turban Tying Experts",
          description: "Professional turban tying services for Sikh, Hindu, and Muslim events.",
          url: "https://example.com",
          images: [],
        },
      };
    }

    const metadataFields = metadataData.items[0].fields as unknown as MetadataFields;

    return {
      title: metadataFields.title,
      description: metadataFields.description,
      openGraph: {
        title: metadataFields.openGraphTitle,
        description: metadataFields.openGraphDescription,
        url: metadataFields.openGraphUrl,
        images: [
          {
            url: `https:${metadataFields.openGraphImage.fields.file.url}`,
            width: metadataFields.openGraphImage.fields.file.details.image.width,
            height: metadataFields.openGraphImage.fields.file.details.image.height,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata from Contentful:", error);
    return {
      title: "Fallback Title",
      description: "Fallback description",
      openGraph: {
        title: "Fallback OG Title",
        description: "Fallback OG Description",
        url: "https://example.com",
        images: [],
      },
    };
  }
}
