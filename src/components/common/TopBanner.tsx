"use client";

import { Button } from "@/components/ui/ui/button";
import { GraduationCap } from "lucide-react";

export default function TopBanner() {
  return (
    <div
      role="banner"
      className="w-full bg-gradient-to-r from-yellow-300 to-yellow-500 border-b border-black text-center py-2 px-3 flex items-center justify-center gap-2 text-black font-semibold"
    >
      <GraduationCap className="w-5 h-5" />
      <span className="text-sm sm:text-base">
        Be Placement Ready – Join Our Waitlist!
      </span>
      <Button
        variant="outline"
        className="bg-white border-black text-black hover:bg-black hover:text-white hover:shadow-md transition ml-2"
        onClick={() =>
          window.open("https://placementprep.nishul.dev", "_blank")
        }
      >
        Join Now
      </Button>
    </div>
  );
}
