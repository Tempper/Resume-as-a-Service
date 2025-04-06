import React from 'react';
import Card from './Card'; // adjust path if needed

const ResumeOverview = ({
  name = 'C-Jay Smith',
  role = 'Front-End Developer',
  location = 'Perth, WA',
  lastUpdated = '5 minutes ago',
  completion = 65
}) => {
  return (
    <Card title="Resume Overview">
      <div className="text-sm text-gray-700 dark:text-white space-y-1">
        <p><span className="font-medium">Name:</span> {name}</p>
        <p><span className="font-medium">Role:</span> {role}</p>
        <p><span className="font-medium">Location:</span> {location}</p>
        <p><span className="font-medium">Last Updated:</span> {lastUpdated}</p>
      </div>

      {/* Completion bar */}
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-800  dark:text-white mb-1">Resume Completion</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${completion}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 dark:text-white   mt-1">{completion}% complete</p>
      </div>
    </Card>
  );
};

export default ResumeOverview;
