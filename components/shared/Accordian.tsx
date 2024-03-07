import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Upload } from "lucide-react";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
const Acccordian = () => {
  return (
    <>
      {/* File upload */}
      <div className="mt-6 mx-10 rounded-[10px]">
        <Accordion type="single" collapsible className="mx-4">
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="font-semibold w-[50px] h-[50px] bg-[#808080]/30 p-7 rounded-[10px] custom-trigger">
              Existing CV
            </AccordionTrigger>
            <div className="flex justify-center bg-[#808080]/30 mb-[20px] acoordian-custom">
              <AccordionContent className="">
                <Link href="#">
                  <Upload className="w-[100px] h-[100px] text-[#808080]"></Upload>
                </Link>
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-2" className="">
            <AccordionTrigger className="font-semibold w-[50px] h-[50px]  bg-[#808080]/30 p-7 rounded-[10px] custom-trigger">
              Give Job Description
            </AccordionTrigger>
            <div className="bg-[#808080]/30 mb-[20px] acoordian-custom">
              <AccordionContent className="w-1156 h-499 top-296 left-202">
                <Textarea
                  className="resize-none font-medium bg-white border-none w-[95%] m-[auto] mt-[15px] h-[200px]  
                  outline-none 
                  focus-visible:ring-0 
                  focus-visible:ring-transparent
                  "
                  cols={50}
                  rows={3}
                  maxLength={500}
                ></Textarea>
              </AccordionContent>
            </div>
          </AccordionItem>
          {/* Portfolio */}
          <AccordionItem value="item-3" className="">
            <AccordionTrigger className="font-semibold w-[50px] h-[50px] bg-[#808080]/30 p-7 rounded-[10px] custom-trigger">
              Attach Portfolio/Website Link (Optional)
            </AccordionTrigger>
            <div className="bg-[#808080]/30 mb-[20px] acoordian-custom">
              <AccordionContent className="w-1156 h-499 top-296 left-202">
                <Input
                  type="url"
                  placeholder="e.g https://www.fahadshahzad.com"
                  className="shadow-cn focus:outline-none border p-2 rounded-md w-[95%] m-[auto] mt-[15px] 
                  outline-none 
                  focus-visible:ring-0 
                  focus-visible:ring-transparent
                  "
                  pattern="[a-zA-Z0-9._%+-]+@example\.com"
                ></Input>
              </AccordionContent>
            </div>
          </AccordionItem>
          {/* Instruction */}
          <AccordionItem value="item-4" className="">
            <AccordionTrigger className="font-semibold w-[50px] h-[50px] bg-[#808080]/30 p-7 rounded-[10px] custom-trigger">
              Additional Instructions
            </AccordionTrigger>
            <div className="bg-[#808080]/30 mb-[20px] acoordian-custom">
              <AccordionContent className="w-1156 h-499 top-296 left-202">
                <Textarea className="resize-none font-medium bg-white border-none w-[95%] m-[auto] mt-[15px]  
                outline-none 
                focus-visible:ring-0 
                focus-visible:ring-transparent
                "></Textarea>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Acccordian;