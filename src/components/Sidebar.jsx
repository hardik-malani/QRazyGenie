import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon} from "@heroicons/react/outline";

export default function Sidebar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 hidden md:block">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className="text-3xl">
          Customize
        </Typography>
      </div>
      <List className="space-y-2 text-lg">
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                QR Code color
              </Typography>
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}/>
        }>
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal mt-auto">
                Background Color
              </Typography>
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-180" : ""
              }`}/>
        }>
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
              <ListItemPrefix>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal mt-auto">
                Custom Logo
              </Typography>
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion
          open={open === 4}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 4 ? "rotate-180" : ""
              }`}/>
        }>
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
              <ListItemPrefix>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal mt-auto">
                Style
              </Typography>
            </AccordionHeader>
          </ListItem>
        </Accordion>
      </List>
    </Card>
  );
}
