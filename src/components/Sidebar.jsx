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
import { ChevronDownIcon } from "@heroicons/react/outline";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function Sidebar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(0);
  const [qrcolor, setQrColor] = useColor("#123123");
  const [bgcolor, setBgColor] = useColor("#123123");

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
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                QR Code color
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 1 && (
            <ColorPicker
              hideInput={["rgb", "hsv"]}
              color={qrcolor}
              onChange={setQrColor}
            />
          )}
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal mt-auto"
              >
                Background Color
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 2 && (
            <ColorPicker
              hideInput={["rgb", "hsv"]}
              color={qrcolor}
              onChange={setQrColor}
            />
          )}
        </Accordion>
        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal mt-auto"
              >
                Custom Logo
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 3 && (
            <div class="relative top-0 w-full h-full flex bg-opacity-60">
            <div class="p-4 bg-white mx-auto rounded-lg">
                <div class="p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
                    <div class="flex flex-col mx-auto text-center">
                        <label>
                            <input class="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                    <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                            <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                        </label>
        
                        <div class="title text-indigo-500 uppercase">or drop files here</div>
                    </div>
                </div>
            </div>
        </div>
        
          )}
        </Accordion>
        <Accordion
          open={open === 4}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 4 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal mt-auto"
              >
                Style
              </Typography>
            </AccordionHeader>
          </ListItem>
        </Accordion>
      </List>
    </Card>
  );
}
