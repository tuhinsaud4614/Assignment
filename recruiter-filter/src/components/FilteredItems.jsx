import * as React from "react";
import { useFilterState } from "../hook";
import seekers from "../demo-data";
import Seeker from "./Seeker";

export default function FilteredItems() {
  const { jobTitles, location, skills } = useFilterState();

  const filteredSeekers = React.useMemo(() => {
    if (!jobTitles.size && !location && !skills.size) {
      return [];
    }

    const jobTitlesArr = [...jobTitles].map((item) => item.toLowerCase());
    const skillsArray = [...skills].map((item) => item.toLowerCase());

    return seekers.filter((seeker) => {
      return (
        (location && seeker.location.search(location) !== -1) ||
        seeker.positions.some((p) => jobTitlesArr.includes(p.toLowerCase())) ||
        seeker.skills.some((sk) => skillsArray.includes(sk.toLowerCase()))
      );
    });
  }, [jobTitles, location, skills]);

  if (filteredSeekers.length === 0) {
    return (
      <>
        <p className="text-red-500 text-xl">No seeker found!</p>
        <p className="text-gray-500 mt-3">Select a location or add job titles or skills</p>
      </>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {filteredSeekers.map(({ id, ...rest }) => (
        <Seeker key={id} {...rest} />
      ))}
    </ul>
  );
}
