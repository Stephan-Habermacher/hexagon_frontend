import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col items-center">
      <Header />
      <main className="max-w-screen-lg flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Page;
