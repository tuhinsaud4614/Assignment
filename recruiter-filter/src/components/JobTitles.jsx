import React from "react";
import Input from "./Input";
import { useFilterDispatch } from "../hook";
import { filterActions } from "../constants";

export default function JobTitles() {
  const [jobTitle, setJobTitle] = React.useState("");
  const dispatch = useFilterDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: filterActions.jobTitlesAdd,
        payload: jobTitle.trim(),
      });
      setJobTitle("");
    }
  };

  return (
    <Input
      className="mb-3"
      label="Job titles"
      placeholder="Enter job title"
      value={jobTitle}
      onChange={(event) => setJobTitle(event.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}
