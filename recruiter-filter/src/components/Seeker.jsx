export default function Seeker(props) {
  const { name, skills, location, positions, img: src } = props;

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 flex self-start">
          <img
            className="w-8 h-8 rounded-full"
            src={src}
            alt={name}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
          <p className="text-sm text-gray-500 truncate">
            {positions.join(" | ")}
          </p>
          <p className="text-sm text-gray-500 truncate">{location}</p>
          <p className="mt-3 text-sm text-gray-500 truncate">
            {skills.join(" | ")}
          </p>
        </div>
      </div>
    </li>
  );
}
