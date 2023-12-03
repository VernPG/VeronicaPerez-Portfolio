import { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import React from "react";


export default function Resume() {
  const [open, setOpen] = useState(false);
  return (
    <>

    <section>
    <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Skills
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Results-oriented and seasoned professional with over 20 years of
          experience in sales, consulting, and purchasing, demonstrating
          expertise in operations management. Adept in talent acquisition,
          retention, and succession planning with a proven track record of
          implementing effective strategies. Skilled in client experience
          consulting, leadership, coaching, and team development ranging from
          ten to 100+ team members. Proficient in budget development, project
          and product management, and vendor relationship management. Proficient
          in Excel, CRM, Adobe, Smartsheets., SharePoint, SmartWebs, Hootsuite,
          Workday, Click Dimensions, MPOS, NCR, ORACLE, RMA, ORPOS, Staffworks,
          and ATLAS Competent in HTML, CSS, Javascript, API’s, NodeJS, Express,
          MySQL, PowerBI, Bootstrap, and React.
        </div>
      </Fade>
    </section>
      
      <section>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Business Experience
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>
      </section>

     <section>
     <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Education
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade>

     </section>
     
    </>
  );
}
