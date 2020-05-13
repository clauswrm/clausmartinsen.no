import React from "react";
import { Link } from "react-router-dom";
import Bits from "../Bits/Bits";
import "./Home.scss";

function Home() {
  return (
    <div className="main">
      <header>
        <Link to="/">{"Claus Martinsen"}</Link>
      </header>
      <main>
        <section className="greeting">
          {"Hei! Mitt navn er Claus og jeg studerer Datateknologi ved NTNU." +
            " Jeg brenner for fullstack utvikling og kunstig intelligens."}
        </section>
        <section>
          {"Se de siste prosjektene mine på "}
          <a href="https://github.com/clauswrm">
            <em>{"GitHub"}</em>
          </a>
          {", lær mer om meg på "}
          <a href="https://no.linkedin.com/in/clausmartinsen">
            <em>{"LinkedIn"}</em>
          </a>
          {" eller følg meg på "}
          <a href="https://www.strava.com/athletes/36804119">
            <em>{"Strava"}</em>
          </a>
          {"."}
        </section>
        <section>
          {"Ønsker du å kontakte meg kan du sende meg en mail på "}
          <a href="mailto:claus@clausmartinsen.no">{"claus@clausmartinsen.no"}</a>
          {" eller ring meg på "}
          <a href="tel:+4795455597">{"95 45 55 97"}</a>
          {"."}
        </section>
      </main>
      <Bits />
    </div>
  );
}

export default Home;
