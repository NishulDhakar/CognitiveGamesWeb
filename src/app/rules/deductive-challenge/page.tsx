import RulePage from "@/components/common/RulePage";
import { deductiveChallengeRules } from "@/data/rules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deductive Logic Puzzles Guide | Crack the Assessment Round",
  description: "Step-by-step guide to solving deductive reasoning and logic puzzles used in technical placements. Practice for your next interview test here.",
};

export default function Page() {
  return <RulePage data={deductiveChallengeRules} />;
}
