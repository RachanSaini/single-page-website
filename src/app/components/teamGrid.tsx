import Image from "next/image";
import { TeamGridData } from "../types/teamGridData";

interface TeamGridProps {
  teamGrid: TeamGridData;
}

export default function TeamGrid({ teamGrid }: TeamGridProps) {
    console.log(teamGrid.teamMember)
  return (
    <section className="team-grid">
      <h2>
        {teamGrid.title}
      </h2>
      <div className="team-container">
        {teamGrid.teamMember.map(( team ) => (
          <div
            key={team.sys.id} className="team-card">
            {team.fields.icon && (
              <Image
                src={`https:${team.fields.icon.fields.file.url}`}
                alt={team.fields.icon.fields.title}
                width={team.fields.icon.fields.file.details.image.width}
                height={team.fields.icon.fields.file.details.image.height}
                className="team-icon"
              />
            )}
            <h3>
              {team.fields.title}
            </h3>
            <p>
              {team.fields.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
