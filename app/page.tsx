export default function Home() {
  return (
    <div className="sm:px-50 sm:p-5 ">
      <header className="flex justify-between items-center bg-blue-400 rounded p-4 text-white">
        <h1 className="text-bold">Dev.Harunzy</h1>
        <div className="flex gap-4">
          <ul>
            <li>Home</li>
          </ul>
          <ul>
            <li>About</li>
          </ul>
          <ul>
            <li>Projects</li>
          </ul>
          <ul>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
