import * as React from "react";
import { filterActions } from "./constants";

export const FilterStateContext = React.createContext();
export const FilterDispatchContext = React.createContext();

const initialFilterState = {
  skills: new Set(),
  location: "",
  jobTitles: new Set(),
};

const filterReducer = (state, action) => {
  const jobTitles = new Set(state.jobTitles);
  const skills = new Set(state.skills);
  switch (action.type) {
    case filterActions.jobTitlesAdd:
      jobTitles.add(action.payload);
      return { ...state, jobTitles };
    case filterActions.jobTitlesRemove:
      jobTitles.delete(action.payload);
      return { ...state, jobTitles };
    case filterActions.skillsAdd:
      skills.add(action.payload);
      return { ...state, skills };
    case filterActions.skillsRemove:
      skills.delete(action.payload);
      return { ...state, skills };
    case filterActions.locationAdd:
      return { ...state, location: action.payload };

    default:
      throw new Error("Unknown action type");
  }
};

export default function FilterContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(filterReducer, initialFilterState);

  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
}
