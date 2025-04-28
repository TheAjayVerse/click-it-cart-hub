
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface FileUploaderProps {
  onImageUpload: (file: File) => void;
}

const FileUploader = ({ onImageUpload }: FileUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Error",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Pass the file to parent component
    onImageUpload(file);
  };

  return (
    <div className="w-full">
      <Card
        className={`border-2 border-dashed rounded-xl ${
          dragActive ? "border-sky-blue bg-sky-blue/10" : "border-gray-300"
        } transition-all`}
      >
        <CardContent className="p-6">
          <form
            onDragEnter={handleDrag}
            onSubmit={(e) => e.preventDefault()}
            className="w-full flex flex-col items-center justify-center"
          >
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            
            <div 
              className="w-full flex flex-col items-center justify-center py-10"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {preview ? (
                <div className="w-full flex flex-col items-center">
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="h-48 object-contain mb-4 rounded-md" 
                  />
                  <Button 
                    onClick={() => {
                      setPreview(null);
                    }}
                    variant="outline"
                  >
                    Remove & Upload Another
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-sky-blue/20 flex items-center justify-center">
                    <Plus className="h-6 w-6 text-sky-blue" />
                  </div>
                  <p className="text-center text-sm text-gray-600">
                    <label htmlFor="file-upload" className="cursor-pointer text-sky-blue hover:text-sky-blue/80">
                      Click to upload
                    </label>
                    {" "}or drag and drop an image
                  </p>
                  <p className="text-xs text-gray-400">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileUploader;
