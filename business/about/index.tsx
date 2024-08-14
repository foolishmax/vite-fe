export default function About() {
  const navigator = useNavigate();

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-cyan-400 text-lg">About Page</h1>
      <button onClick={() => navigator(-1)}>back</button>
    </div>
  );
}
