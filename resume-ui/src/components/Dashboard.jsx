import Header from './Header';
import Sidebar from './Sidebar';
import Card from './Card';

export default function Dashboard({ toggleTheme }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar stays fixed, vertical layout */}
      <Sidebar />

      {/* Main content takes up remaining space */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header stays at the top of the content area */}
        <Header toggleTheme={toggleTheme} />

        {/* Resume Overview card */}
        <Card title="Resume Overview">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel velit vel nulla gravida rutrum.
          </p>
        </Card>

        {/* Latest activity card */}
        <Card title="Latest Activity">
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>✔️ Exported resume as PDF (5 mins ago)</li>
            <li>✔️ Updated "Projects" section</li>
            <li>✔️ Connected GitHub profile</li>
          </ul>
        </Card>

        {/* Quick links */}
        <Card title="Quick Links">
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/resume"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                View resume as JSON
              </a>
            </li>
            <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Edit HTML template</a></li>
            <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Generate Markdown</a></li>
          </ul>
        </Card>
      </main>
    </div>
  );
}
