import React from "react";

function Title({ text }: { text: string }) {
  return <h3 className="text-xl mb-2">{text}</h3>;
}

export default Title;
