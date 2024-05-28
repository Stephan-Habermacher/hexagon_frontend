import { ReactNode, createContext, useState } from "react";
interface IBreadcrumbContext {
  breadcrumbname: string;
  setBreadcrumbname: Function;
}

export const BreadcrumbContext = createContext<IBreadcrumbContext>({
  breadcrumbname: "",
  setBreadcrumbname: () => {},
});

export function BreadcrumbContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [breadcrumbname, setBreadcrumbname] = useState("");
  return (
    <BreadcrumbContext.Provider value={{ breadcrumbname, setBreadcrumbname }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}
