import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

type TextFooterProps = {
  onSkip?: () => void;
};

export default function TextFooter({ onSkip }: TextFooterProps) {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-white text-4xl lg:text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-gray-400">Match</span> <br /> the photo pairs
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-white text-4xl lg:text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        to reveal <br /> <span className="text-gray-400">the surprise</span>
      </h1>

      {/* Copyright - click to skip for testing */}
      <p
        className="absolute bottom-5 right-5 text-white text-sm opacity-15 hover:opacity-50 cursor-pointer select-none"
        onClick={onSkip}
      >
        © {new Date().getFullYear()}{" "}
        Made with ❤️ by{" Victor"}
      </p>
    </>
  );
}
