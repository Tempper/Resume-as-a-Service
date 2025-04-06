import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import ResumePreview from '../components/ResumePreview';
import Overview from '../components/Overview';


export default function Dashboard({ resume, toggleTheme }) {
  const [activeView, setActiveView] = useState('overview');
  console.log('activeView:', activeView);
  console.log('resume data:', resume);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar stays fixed, vertical layout recieves a click handler to update main content */}
      <Sidebar onSelect={setActiveView} activeView={activeView} toggleTheme={toggleTheme} />

      {/* Main content takes up remaining space */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header stays at the top of the content area */}
        <Header toggleTheme={toggleTheme } activeView={activeView} />

        {/* Conditionally render content based on view */}
        {activeView === 'overview' && <Overview />}
        {activeView === 'preview' && resume && (
  <ResumePreview data={resume} />
)}
        {activeView === 'export' && <ExportSection />}
        {activeView === 'settings' && <Settings />}

      </main>
    </div>
  );
}
