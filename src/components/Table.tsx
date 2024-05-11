import React from "react";
import { IProject } from "../Types";

function Table({ projects }: { projects: IProject[] }) {
  return (
    <table className="table-auto w-full text-left">
      <thead className="h-8 bg-lime-500">
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
          <tr className="h-8 hover:bg-lime-200">
            <td>
              {project.customer} {project.name}
            </td>
            <td>
              {project.quantities.german +
                project.quantities.french +
                project.quantities.italian}
            </td>
            <td>
              {project.languages.isGerman ? "d" : ""}
              {project.languages.isFrench ? "/f" : ""}
              {project.languages.isItalian ? "/i" : ""}
            </td>
            <td>{project.lettershopId}</td>
            <td>
              {project.shippingProvider.isPost ? "Post" : ""}
              {project.shippingProvider.isQuickmail ? "Quickmail" : ""}
            </td>
            <td>{project.shippingDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
