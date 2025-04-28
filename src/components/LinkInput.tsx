
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface LinkInputProps {
  onLinkSubmit: (link: string) => void;
}

const LinkInput = ({ onLinkSubmit }: LinkInputProps) => {
  const [link, setLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!link.trim()) {
      toast({
        title: "Empty Input",
        description: "Please enter a product link",
        variant: "destructive",
      });
      return;
    }

    // Very basic URL validation
    if (!link.startsWith("http")) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL starting with http:// or https://",
        variant: "destructive",
      });
      return;
    }

    onLinkSubmit(link);
    setLink("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Paste a product link here..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full"
        />
      </div>
      <Button type="submit" className="btn-primary">
        <Search className="h-4 w-4 mr-2" />
        Find
      </Button>
    </form>
  );
};

export default LinkInput;
