export default function Greeting() {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <img
        src="/images/User Avatar.png"
        alt=""
        className="w-20 h-20"
      />

      <p className="text-grey-400 text-[16px]">
        Good Morning, John
      </p>

      <h1 className="text-2xl md:text-3xl font-semibold text-white">
        How can i assist you today?
      </h1>
    </div>
  );
}
