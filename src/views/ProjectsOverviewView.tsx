import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import Button from "../components/Button";
import Table from "../components/Table";
import { IProject } from "../types";

function ProjectsOverviewView() {
  const [projects, setProjects] = useState<IProject[]>([]);
  async function fetchProjects() {
    const res = await fetch("http://localhost:3000/projects");
    const data = await res.json();
    setProjects(data);
  }
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Page>
      <>
        <div className="w-full flex justify-end ">
          <Button text="Neues Projekt erstellen" />
        </div>
        <div className="mt-2">
          <Table projects={projects} />
        </div>
      </>
    </Page>
  );
}

export default ProjectsOverviewView;
