export default function ActionCard({ icon, title }) {
  return (
    <div className="bg-[#1f1f1f] hover:bg-[#262626] transition rounded-xl p-5 flex items-start gap-3 cursor-pointer">
      <img src={icon} alt="" className="w-6 h-6" />
      <p className="text-sm text-gray-300 leading-snug">
        {title}
      </p>
    </div>
  );
}
