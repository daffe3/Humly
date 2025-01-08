type ResidentCardProps = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

export default function ResidentCard({
  name,
  status,
  species,
  gender,
  image,
}: ResidentCardProps) {
  return (
    <li className="flex items-center mt-2 space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-gray-500">
          {status} - {species} ({gender})
        </p>
      </div>
    </li>
  );
}
