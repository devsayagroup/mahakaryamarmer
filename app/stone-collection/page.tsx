import Image from "next/image";

export default function StoneCollection() {
  return (
    <>
      <div className="h-screen flex flex-col mx-auto justify-center items-center gap-2">
        <Image src="/main-logo.png" width={200} height={200} alt="Maha Karya Marmer"/>
        <h1 className="text-4xl md:text-7xl font-style uppercase mt-4">Stone Collection Page</h1>
      </div>
    </>
  );
}