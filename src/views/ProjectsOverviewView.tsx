import React from "react";
import Page from "../components/Page";
import Button from "../components/Button";
import Table from "../components/Table";

function ProjectsOverviewView() {
  return (
    <Page>
      <div className="w-full flex justify-end ">
        <Button text="Neues Projekt erstellen" />
      </div>
      <Table />
    </Page>
  );
}

export default ProjectsOverviewView;
