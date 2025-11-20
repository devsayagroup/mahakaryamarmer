import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen gap-2 ">
      <div className="absolute inset-0">
        <Image
        src="/home.jpeg"
        alt="Asian dining background"
        fill
        priority
        className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gray/25"></div>
      </div>
      <div className="relative max-w-5xl h-screen flex flex-col mx-auto text-black justify-center items-center text-center z-20 ">
        <h1 className="text-6xl md:text-6xl font-text tracking-wide uppercase mt-4">
          Crafting Timeless Luxury from Nature’s Finest Stones
        </h1>
        <p className="max-w-lg md:text-lg font-text">Exceptional surfaces for homes, hospitality, and architectural masterpieces.</p>
      </div>
    </div>
  );
}
