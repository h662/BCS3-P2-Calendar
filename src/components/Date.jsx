function Date({ date, day, todos }) {
  return (
    <li className="inline-block bg-white rounded-lg shadow-md">
      <div
        className={`rounded-t-lg px-2 py-1 text-xl text-white ${
          day === "SAT"
            ? "bg-orange-400"
            : day === "SUN"
            ? "bg-red-400"
            : "bg-blue-400"
        }`}
      >
        {date}
      </div>
      <ul className="p-2 text-lg min-h-[80px]">
        {todos.map((v, i) => {
          return (
            <li className="truncate" key={i}>
              {v}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Date;
