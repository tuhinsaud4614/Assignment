import * as React from "react";
import Input from "./components/Input";
import { useFilterDispatch } from "./hook";
import { filterActions } from "./constants";

export default function Skills() {
  const [skill, setSkill] = React.useState("");
  const dispatch = useFilterDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: filterActions.skillsAdd,
        payload: skill.trim(),
      });
      setSkill("");
    }
  };

  return (
    <Input
      className="mb-3"
      label="Skills"
      placeholder="Enter skill"
      value={skill}
      onChange={(event) => setSkill(event.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}
