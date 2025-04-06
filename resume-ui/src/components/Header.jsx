export default function Header({ activeView }) {
  return (
    <div className="header">
      {activeView === 'overview' && (
      <h1 className="text-3xl font-bold mb-4">Welcome, C-Jay</h1>
    )}
    </div>
  );
}