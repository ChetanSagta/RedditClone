import { Card } from "../ui/Card";

export const RuleCard = () => {
  return (
    <Card className="font-bold">
      Posting to Reddit:
      <ol>
        <li>Remember the human</li>
        <li>Behave like you would in real life</li>
        <li>Look for the original source of content</li>
        <li>Search for duplicates before posting</li>
        <li>Read the community’s rules</li>
      </ol>
    </Card>
  );
};
