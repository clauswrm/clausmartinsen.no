import React from "react";
import { Link } from "react-router-dom";
import Bits from "../Bits/Bits";
import "./Page.scss";

interface PageProps {
  children: React.ReactNode;
}

function Page(props: PageProps) {
  return (
    <div className="page">
      <header className="header">
        <Link to="/">{"Claus Martinsen"}</Link>
      </header>
      <main className="main">{props.children}</main>
      <Bits />
    </div>
  );
}

export default Page;
