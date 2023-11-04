"use client";

import { UploadButton, UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from '../api/uploadthing/core';



export default function UploadThing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
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
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res : any) => {
          // Do something with the response
          
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      
    </main>
  );
}