import { useFilterDispatch, useFilterState } from "./hook";
import Badge from "./components/Badge";
import { filterActions } from "./constants";

export default function SkillList() {
  const { skills } = useFilterState();
  const dispatch = useFilterDispatch();

  if (skills.size < 1) {
    return null;
  }

  return (
    skills.size > 0 && (
      <div className="flex flex-wrap gap-3 mb-3">
        {[...skills].map((sk) => (
          <Badge
            key={sk}
            value={sk}
            onRemove={(value) => {
              dispatch({ type: filterActions.skillsRemove, payload: value });
            }}
          />
        ))}
      </div>
    )
  );
}
