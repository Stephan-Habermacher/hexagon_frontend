import { useEffect, useState } from "react";
import Page from "../components/Page";
import Button from "../components/Button";
import Table from "../components/Table";
import { IProject } from "../types/types";
import { useNavigate } from "react-router-dom";

function ProjectsOverviewView() {
  const [projects, setProjects] = useState<IProject[]>([]);
  async function fetchProjects() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
    const data = await res.json();
    setProjects(data);
  }
  useEffect(() => {
    fetchProjects();
  }, []);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/projekt");
  };

  return (
    <Page>
      <>
        <div className="w-full flex justify-end">
          <Button onClick={handleButtonClick} text="Neues Projekt erstellen" />
        </div>
        <div className="mt-2">
          <Table projects={projects} />
        </div>
      </>
    </Page>
  );
}

export default ProjectsOverviewView;
