"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import AllUsers from "./AllUsers";
import SpecificUser from "./SpecificUser";

const AccordionUI = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="w-[40rem]">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          All Users
        </AccordionHeader>
        <AccordionBody>
          <AllUsers />
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Search User by ID
        </AccordionHeader>
        <AccordionBody>
          <SpecificUser />
        </AccordionBody>
      </Accordion>
    </section>
  );
};
export default AccordionUI;
