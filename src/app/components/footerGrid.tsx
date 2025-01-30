import Image from "next/image";
import Link from "next/link"; // Import Link for client-side navigation
import { FooterGridData } from "../types/footer/FooterGridData";

interface FooterGridProps {
  footerGrid: FooterGridData;
}

export default function FooterGrid({ footerGrid }: FooterGridProps) {
  console.log(footerGrid.features);

  return (
    <section className="team-grid">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{footerGrid.title}</h2>
      <div className="team-container">
        {footerGrid.features.map((footer) => (
          <div key={footer.sys.id} className="team-card">
            {footer.fields.icon && (
              <Link href={footer.fields.link} passHref>
                <Image
                  src={`https:${footer.fields.icon.fields.file.url}`}
                  alt={footer.fields.icon.fields.title}
                  width={footer.fields.icon.fields.file.details.image.width}
                  height={footer.fields.icon.fields.file.details.image.height}
                  className="team-icon"
                />
              </Link>
            )}
            <span className="mt-2 text-black text-lg font-semibold">{footer.fields.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
