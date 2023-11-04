"use client";

import { UploadButton, UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from '../api/uploadthing/core';



export default function UploadThing() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
       <UploadDropzone<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
      console.log("Files: ", res);
      alert("Upload Completed");
    }}
    onUploadError={(error: Error) => {
      alert(`ERROR! ${error.message}`);
    }}
    onUploadBegin={(name) => {
      // Do something once upload begins
      console.log("Uploading: ", name);
    }}
  />
      
      
    </main>
  );
}