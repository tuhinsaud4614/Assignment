export default function Sidebar(props) {
  const { children } = props;
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-200">
      <div className="overflow-y-auto py-5 px-3 h-full bg-white">
        {children}
      </div>
    </aside>
  );
}
