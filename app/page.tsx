import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col mx-auto justify-center items-center gap-2">
      <div className="bg-yellow-950/90 p-4 rounded-xs mb-2">
        <Image src="/mkm-main-logo.webp" width={200} height={200} alt="Maha Karya Marmer"/>
      </div>
      <h1 className="text-4xl md:text-7xl font-style uppercase">Maha karya marmer</h1>
      <p className="text-xl md:text-3xl font-text">Dari Masa Ke Masa</p>
    </div>
  );
}
