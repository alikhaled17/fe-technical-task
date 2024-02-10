/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import MainLayout from "@/app/layouts/MainLayout";
import TaskPage from "./app/pages/TaskPage";

function App() {
  return (
    <MainLayout>
      <TaskPage />
    </MainLayout>
  );
}

export default App;
