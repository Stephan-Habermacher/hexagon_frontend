import React from "react";
import { IProject } from "../Types";

function Table({ projects }: { projects: IProject[] }) {
  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-lime-500">
        <tr>
          <th>Kunde/Projekt</th>
          <th>Auflage</th>
          <th>Sprachen</th>
          <th>Lettershop</th>
          <th>Versanddienstleister</th>
          <th>Auflieferdatum</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id} className="hover:bg-lime-200">
            <td>
              {project.customer} {project.name}
            </td>
            <td>80'000</td>
            <td>d/f</td>
            <td>M+C</td>
            <td>Post/Quickmail</td>
            <td>15.04.2024</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
