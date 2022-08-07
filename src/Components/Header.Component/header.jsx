import React from "react";

export const Header = () => {
  return (
    <>
      <header className="navigation">
        <section className="nav-container-startsec">
          {/* logo */}
          <span className="nav-title">Flash Connect</span>
        </section>
        <section className="nav-container-endsec">{/* header icons */}</section>
      </header>
    </>
  );
};
