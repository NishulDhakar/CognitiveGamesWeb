import RulePage from "@/components/common/RulePage";
import { gridChallengeRules } from "@/data/rules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master the Grid Challenge | Rules, Logic & Free Mock Test",
  description: "Improve your spatial reasoning and memory. Learn how to beat the Grid Challenge assessment round with our comprehensive guide and practice test.",
};

export default function Page() {
  return <RulePage data={gridChallengeRules} />;
}
