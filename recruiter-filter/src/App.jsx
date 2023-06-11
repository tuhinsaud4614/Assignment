import * as React from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Seeker from "./components/Seeker";
import Sidebar from "./components/Sidebar";
import Badge from "./components/Badge";

const seekers = [
  {
    id: crypto.randomUUID(),
    name: "Neil Sims",
    skills: ["Python", "Html", "Css"],
    location: "DHAKA",
    positions: ["Software Engineer"],
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Bonnie Green",
    skills: ["React", "Node Js", "Express Js"],
    location: "CHANDPUR",
    positions: ["MERN Stack Engineer"],
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Michael Gough",
    skills: ["Python", "Numpy", "Pandas"],
    location: "CHATTOGRAM",
    positions: ["Data Scientist"],
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Thomes Lean",
    skills: ["Python", "Html", "Css"],
    location: "KHULNA",
    positions: ["Software Engineer"],
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
  },
];

const initialFilterState = {
  skills: new Set(),
  location: "",
  jobTitles: new Set(),
};

const filterReducer = (state, action) => {
  const jobTitles = new Set(state.jobTitles);
  const skills = new Set(state.skills);
  switch (action.type) {
    case "JOB_TITLES_ADD":
      jobTitles.add(action.payload);
      return { ...state, jobTitles };
    case "JOB_TITLES_REMOVE":
      jobTitles.delete(action.payload);
      return { ...state, jobTitles };
    case "SKILLS_ADD":
      skills.add(action.payload);
      return { ...state, skills };
    case "SKILLS_REMOVE":
      skills.delete(action.payload);
      return { ...state, skills };
    case "LOCATION_ADD":
      return { ...state, location: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};

function App() {
  const [jobTitle, setJobTitle] = React.useState("");
  const [skill, setSkill] = React.useState("");
  const [{ jobTitles, location, skills }, dispatch] = React.useReducer(
    filterReducer,
    initialFilterState
  );

  const handleKeyPress = (fieldFor) => (event) => {
    if (event.key === "Enter") {
      if (fieldFor === "JOB_TITLES_ADD") {
        dispatch({
          type: fieldFor,
          payload: jobTitle.trim(),
        });
        setJobTitle("");
      } else if (fieldFor === "SKILLS_ADD") {
        dispatch({
          type: fieldFor,
          payload: skill.trim(),
        });
        setSkill("");
      }
    }
  };

  const filteredSeekers = React.useMemo(() => {
    if (!jobTitles.size && !location && !skills.size) {
      return [];
    }
    return seekers.filter((seeker) => {
      const lowercasePositions = seeker.positions.map((p) => p.toLowerCase());
      const lowercaseSkills = seeker.skills.map((sk) => sk.toLowerCase());
      
      return (
        (location && seeker.location.search(location) !== -1) ||
        lowercasePositions.some((p) => jobTitles.has(p.toLowerCase())) ||
        lowercaseSkills.some((sk) => skills.has(sk.toLowerCase()))
      );
    });
  }, [jobTitles, location, skills]);

  return (
    <>
      <Sidebar>
        <Input
          className="mb-3"
          label="Job titles"
          placeholder="Enter job title"
          value={jobTitle}
          onChange={(event) => setJobTitle(event.target.value)}
          onKeyPress={handleKeyPress("JOB_TITLES_ADD")}
        />
        {jobTitles.size > 0 && (
          <div className="flex flex-wrap gap-3 mb-3">
            {[...jobTitles].map((jt) => (
              <Badge
                key={jt}
                value={jt}
                onRemove={(value) => {
                  dispatch({ type: "JOB_TITLES_REMOVE", payload: value });
                }}
              />
            ))}
          </div>
        )}
        <Select
          className="mb-3"
          label="Location"
          onChange={(event) => {
            dispatch({
              type: "LOCATION_ADD",
              payload: event.target.value,
            });
          }}
          options={[
            { name: "Dhaka", value: "DHAKA" },
            { name: "Chandpur", value: "CHANDPUR" },
            { name: "Chattogram", value: "CHATTOGRAM" },
            { name: "Khulna", value: "KHULNA" },
          ]}
          selectedOption="Choose a location"
        />
        <Input
          className="mb-3"
          label="Skills"
          placeholder="Enter skill"
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
          onKeyPress={handleKeyPress("SKILLS_ADD")}
        />
        {skills.size > 0 && (
          <div className="flex flex-wrap gap-3 mb-3">
            {[...skills].map((sk) => (
              <Badge
                key={sk}
                value={sk}
                onRemove={(value) => {
                  dispatch({ type: "SKILLS_REMOVE", payload: value });
                }}
              />
            ))}
          </div>
        )}
      </Sidebar>
      <main className="p-4 ml-64">
        <h2 className="text-2xl font-semibold mb-4">Seekers</h2>
        <div className="w-full max-w-md mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          {filteredSeekers.length === 0 ? (
            "No seeker found!"
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredSeekers.map(({ id, ...rest }) => (
                <Seeker key={id} {...rest} />
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
