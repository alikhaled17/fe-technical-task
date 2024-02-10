/* eslint-disable @typescript-eslint/no-explicit-any */
import Search from "@/app/components/task-page/Search";
import SearchResults from "@/app/components/task-page/SearchResults";

const TaskPage = () => {
  return (
    <section className="py-8 ">
      <Search />
      <SearchResults />
    </section>
  );
};

export default TaskPage;
