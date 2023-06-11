import Badge from "./components/Badge";
import { filterActions } from "./constants";
import { useFilterDispatch, useFilterState } from "./hook";

export default function JobTitleList() {
  const { jobTitles } = useFilterState();
  const dispatch = useFilterDispatch();

  if (jobTitles.size < 1) {
    return null;
  }

  return (
    jobTitles.size > 0 && (
      <div className="flex flex-wrap gap-3 mb-3">
        {[...jobTitles].map((sk) => (
          <Badge
            key={sk}
            value={sk}
            onRemove={(value) => {
              dispatch({ type: filterActions.jobTitlesRemove, payload: value });
            }}
          />
        ))}
      </div>
    )
  );
}
