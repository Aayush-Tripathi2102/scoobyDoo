import AnimatedText from "@/components/text";

export default async function Home() {
  return (
    <div className="flex text-5xl italic w-[1300px] h-[300px] items-center justify-center m-auto mt-[10%]">
        <AnimatedText text="Capture The Rewind" preStyle='cursor-pointer'/>
    </div>
  );
}
