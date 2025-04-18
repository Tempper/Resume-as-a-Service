import ResumeOverview from './ResumeOverview';
import Card from './Card';

export default function Overview() {
  return (
    <>
      <ResumeOverview />

      <Card title="Latest Activity">
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>✔️ Exported resume as PDF (5 mins ago)</li>
          <li>✔️ Updated "Projects" section</li>
          <li>✔️ Connected GitHub profile</li>
        </ul>
      </Card>

      <Card title="Quick Links">
        <ul className="text-sm space-y-2">
          <li><a href="/resume" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">View resume as JSON</a></li>
          <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Edit HTML template</a></li>
          <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Generate Markdown</a></li>
        </ul>
      </Card>
    </>
  );
}
