import JobTitles from "./JobTitles";
import JobTitleList from "./JobTitleList";
import Locations from "./Locations";
import Skills from "./Skills";
import SkillList from "./SkillList";
import FilteredItems from "./FilteredItems";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar>
        <JobTitles />
        <JobTitleList />
        <Locations />
        <Skills />
        <SkillList />
      </Sidebar>
      <main className="p-4 ml-64">
        <h2 className="text-2xl font-semibold mb-4">Seekers</h2>
        <div className="w-full max-w-md mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <FilteredItems />
        </div>
      </main>
    </>
  );
}

export default App;
