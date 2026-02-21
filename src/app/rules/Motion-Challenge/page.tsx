import RulePage from "@/components/common/RulePage";
import { motionChallengeRules } from "@/data/rules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Challenge Assessment Prep | Complete Guide & Practice",
  description: "Learn how the Motion Challenge works. Improve your cognitive processing speed with our step-by-step logic guide and interactive games.",
};

export default function Page() {
  return <RulePage data={motionChallengeRules} />;
}
