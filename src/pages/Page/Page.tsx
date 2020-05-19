import React from "react";
import { Link } from "react-router-dom";
import Bits from "../../components/Bits/Bits";
import "./Page.scss";

interface PageProps {
  children: React.ReactNode;
  headerMenu?: React.ReactNode;
}

function Page(props: PageProps) {
  return (
    <div className="page">
      <header className="header">
        <Link to="/">
          <h1>{"Claus Martinsen"}</h1>
        </Link>
        <div>{props.headerMenu}</div>
      </header>
      <main className="main">{props.children}</main>
      <Bits />
    </div>
  );
}

export default Page;
