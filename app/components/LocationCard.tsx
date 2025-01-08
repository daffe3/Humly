import { Resident } from "../utils/types";
import ResidentCard from "./ResidentCard";

type LocationCardProps = {
  name: string;
  type: string;
  dimension: string;
  residents: Resident[];
};

export default function LocationCard({
  name,
  type,
  dimension,
  residents,
}: LocationCardProps) {
  const aliveResidents = residents.filter(
    (resident) => resident.status === "Alive"
  ).length;
  const deadResidents = residents.filter(
    (resident) => resident.status === "Dead"
  ).length;
  const robotCount = residents.filter(
    (resident) => resident.species === "Robot"
  ).length;
  const alienCount = residents.filter(
    (resident) => resident.species === "Alien"
  ).length;
  const humanCount = residents.filter(
    (resident) => resident.species === "Human"
  ).length;

  return (
    <div className="border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{name}</h2>
      <p className="text-lg text-gray-700 mb-2">
        Type: <span className="font-medium">{type}</span>
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Dimension: <span className="font-medium">{dimension}</span>
      </p>

      <div className="mb-4">
        <h4 className="text-lg font-semibold">Statistics:</h4>
        <ul>
          <li>Alive Residents: {aliveResidents}</li>
          <li>Dead Residents: {deadResidents}</li>
          <li>Robots: {robotCount}</li>
          <li>Aliens: {alienCount}</li>
          <li>Humans: {humanCount}</li>
        </ul>
      </div>

      <div className="mt-2">
        <h3 className="text-lg font-bold">Residents:</h3>
        <ul>
          {residents.map((resident) => (
            <ResidentCard key={resident.id} {...resident} />
          ))}
        </ul>
      </div>
    </div>
  );
}
