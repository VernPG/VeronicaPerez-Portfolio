import { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import React from "react";


export default function Highlights() {
    const [openSkills, setOpenSkills] = useState(false);
    const [openExp, setOpenExp] = useState(false);
    const [openEdu, setOpenEdu] = useState(false);
  
    return (
        <>
     
        <section>
        <Button
          onClick={() => setOpenSkills(!openSkills)}
          aria-controls="example-fade-text"
          aria-expanded={openSkills}
        >
          Skills
        </Button>
        <Fade in={openSkills}>
          <div id="example-fade-text">
        One Skill
          </div>
        </Fade>
      </section>

      <section>
        <Button
          onClick={() => setOpenExp(!openExp)}
          aria-controls="example-fade-text"
          aria-expanded={openExp}
        >
          Business Experience
        </Button>
        <Fade in={openExp}>
          <div id="example-fade-text">
            <Business />
          </div>
        </Fade>
      </section>
      </>
  );
}
