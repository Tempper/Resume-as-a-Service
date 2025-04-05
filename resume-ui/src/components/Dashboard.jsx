import Header from './Header';
import Sidebar from './Sidebar';
import Card from './Card';

export default function Dashboard({ toggleTheme }) {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Header toggleTheme={toggleTheme} />

        <Card title="Resume Overview">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel velit vel nulla gravida rutrum.</p>
        </Card>

        <Card title="Latest Activity">
          <ul>
            <li>✔️ Exported resume as PDF (5 mins ago)</li>
            <li>✔️ Updated "Projects" section</li>
            <li>✔️ Connected GitHub profile</li>
          </ul>
        </Card>

        <Card title="Quick Links">
          <ul>
            <li><a href="/resume" target="_blank" rel="noreferrer">View resume as JSON</a></li>
            <li><a href="#">Edit HTML template</a></li>
            <li><a href="#">Generate Markdown</a></li>
          </ul>
        </Card>
      </main>
    </div>
  );
}
