import appwriteService, { account, AppwriteService } from "@/appwrite/config";
import AnimatedText from "@/components/text";
import Image from "next/image";

export default async function Home() {
  try {
    const user = await appwriteService.isLoggedIn();
    return (
      <div className="flex flex-col gap-5 text-5xl italic w-[1300px] h-[300px] items-center justify-center m-auto mt-[10%]">
          <AnimatedText text="Capture The Rewind" preStyle='cursor-pointer'/>
            <Image src='/playButton.png' alt="play" width={260} height={140} />
      </div>
    );
  } catch (error) {
    return (
      <div className="flex text-5xl italic w-[1300px] h-[300px] items-center justify-center m-auto mt-[10%]">
          <AnimatedText text="Capture The Rewind" preStyle='cursor-pointer'/>
      </div>
    );
  }
}
