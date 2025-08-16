import RulePage from "@/components/common/RulePage";
import { deductiveChallengeRules } from "@/data/rules";

export default function Page() {
  return <RulePage data={deductiveChallengeRules} />;
}
