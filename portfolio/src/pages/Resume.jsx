import { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import React from "react";
import Business from "../components/Business";
import Accordion from 'react-bootstrap/Accordion';

export default function Resume() {
  // const [openSkills, setOpenSkills] = useState(false);
  // const [openExp, setOpenExp] = useState(false);
  // const [openEdu, setOpenEdu] = useState(false);

  return (
    <>
      <section>


    <Accordion className="accordion" defaultActiveKey="0" fixed>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Skills</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Business Experience</Accordion.Header>
        <Accordion.Body>
    <Business />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Education</Accordion.Header>
        <Accordion.Body>
    <Business />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

{/* 
        <Button
          onClick={() => setOpenSkills(!openSkills)}
          aria-controls="example-fade-text"
          aria-expanded={openSkills}
        >
          Skills
        </Button>
        <Fade in={openSkills}>
          <div id="example-fade-text">
            Results-oriented and seasoned professional with over 20 years of
            experience in sales, consulting, and purchasing, demonstrating
            expertise in operations management. Adept in talent acquisition,
            retention, and succession planning with a proven track record of
            implementing effective strategies. Skilled in client experience
            consulting, leadership, coaching, and team development ranging from
            ten to 100+ team members. Proficient in budget development, project
            and product management, and vendor relationship management.
            Proficient in Excel, CRM, Adobe, Smartsheets., SharePoint,
            SmartWebs, Hootsuite, Workday, Click Dimensions, MPOS, NCR, ORACLE,
            RMA, ORPOS, Staffworks, and ATLAS Competent in HTML, CSS,
            Javascript, API’s, NodeJS, Express, MySQL, PowerBI, Bootstrap, and
            React.
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

      <section>
        <Button
          onClick={() => setOpenEdu(!openEdu)}
          aria-controls="example-fade-text"
          aria-expanded={openEdu}
        >
          Education
        </Button>
        <Fade in={openEdu}>
          <div id="example-fade-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Fade> */}
      </section>
    </>
  );
}
