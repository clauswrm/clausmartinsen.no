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
      <header>
        <Link to="/">
          <h1>{"Claus Martinsen"}</h1>
        </Link>
        <div>{props.headerMenu}</div>
      </header>
      <main>{props.children}</main>
      <footer>
        <Bits />
      </footer>
    </div>
  );
}

export default Page;
