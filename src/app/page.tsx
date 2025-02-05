import AnimatedText from "@/components/text";

export default async function Home() {
  return (
    <div>
    <div className="flex text-5xl italic w-screen h-screen items-center justify-center">
      {/* <p className="text-center">
        [{' '}Capture The Rewind{' '}]
      </p> */}
        <AnimatedText text="Capture The Rewind" preStyle='cursor-pointer'/>
    </div>
    </div>
  );
}
