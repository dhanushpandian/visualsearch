
import { UserButton } from "@clerk/nextjs";
import Nav from "./components/Nav";
import Upload from "./components/Upload";
import { UploadButton, UploadDropzone } from "@uploadthing/react";
import UploadThing from "./components/UploadThing";

export default function Home() {
  return (
    <>
    <Nav />
   <div >
      
      <div className="flex flex-col items-center justify-center ">
        <Upload />
        
      </div>
      <UploadThing></UploadThing>
  
    </div>
    
    </>
  );
}


