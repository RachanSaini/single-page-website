import Image from "next/image";
import { FeatureGridData } from "../types/features/featureGridData";

interface FeatureGridProps {
  featureGrid: FeatureGridData;
}

export default function FeatureGrid({ featureGrid }: FeatureGridProps) {
  return (
    <section className="feature-grid py-5 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        {featureGrid.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {featureGrid.features.map((feature) => (
          <div
            key={feature.sys.id}
            className="p-3 bg-gray-100 rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-1 hover:shadow-2xl"
          >
            {feature.fields.icon && (
              <Image
                src={`https:${feature.fields.icon.fields.file.url}`}
                alt={feature.fields.icon.fields.title}
                width={feature.fields.icon.fields.file.details.image.width}
                height={feature.fields.icon.fields.file.details.image.height}
                className="mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              {feature.fields.title}
            </h3>
            <p className="text-base text-gray-600 text-gray text-center">
              {feature.fields.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
