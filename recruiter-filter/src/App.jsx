import JobTitles from "./components/JobTitles";
import JobTitleList from "./components/JobTitleList";
import Locations from "./components/Locations";
import Skills from "./components/Skills";
import SkillList from "./components/SkillList";
import FilteredItems from "./components/FilteredItems";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar>
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <JobTitles />
        <JobTitleList />
        <hr className="h-px my-4 bg-gray-200 border-0" />
        <Locations />
        <hr className="h-px my-4 bg-gray-200 border-0" />
        <Skills />
        <SkillList />
      </Sidebar>
      <main className="p-4 ml-64">
        <h2 className="text-2xl font-semibold mb-4">Seekers</h2>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow">
          <FilteredItems />
        </div>
      </main>
    </>
  );
}

export default App;
