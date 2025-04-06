export default function Card({ title, children }) {
  return (
    <div className="border border-gray-300 dark:border-zinc-600 p-4 my-4 rounded-md bg-white dark:bg-zinc-700 text-black dark:text-white">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}