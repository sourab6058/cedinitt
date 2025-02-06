// import "../styles/updates.css";

export default function Updates({ updates }) {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl uppercase p-2 font-bold border-b-2 border-blue-400">
        Updates
      </h2>
      <div className="flex flex-col gap-2 max-h-[450px] overflow-y-scroll">
        {updates.map(({ update, link }) => (
          <div className="p-2 border-b border-slate-500">
            {update}
            {"  "}
            <span
              className="text-blue-400 font-bold animate-pulse cursor-pointer"
              onClick={() => handleClick(link)}
            >
              Click Here
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
