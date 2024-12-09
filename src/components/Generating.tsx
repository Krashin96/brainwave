import { loading } from "../assets";

export default function Generating({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base ${
        className || ""
      }`}
    >
      <img src={loading} className="w-5 h5 mr-4" alt="Loading" />
      <p>AI is generating</p>
    </div>
  );
}
