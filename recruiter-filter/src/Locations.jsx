import Select from "./components/Select";
import { filterActions } from "./constants";
import { useFilterDispatch } from "./hook";

export default function Locations() {
  const dispatch = useFilterDispatch();

  return (
    <Select
      className="mb-3"
      label="Location"
      onChange={(event) => {
        dispatch({
          type: filterActions.locationAdd,
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
  );
}
