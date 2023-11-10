"use client";
import { useRouter } from "next/navigation";
import Card from "../components/Card";
import Image from "next/image";
import Link from "next/link";
export default function Done(props: any) {
  const router = useRouter();


  function backToHome() {
    console.log("backToHome");
    router.back();
  }

  return (
    <div className="sm:bg-[#242742] w-full min-h-screen static h-full">
      <Card>
        <div className="p-8 sm:max-w-sm text-[#1B1E41] flex flex-col gap-8 place-content-between h-full">
          <div className="flex flex-col gap-8">
            <Image
              src="/assets/images/icon-success.svg"
              alt="Success Icon"
              width={48}
              height={48} />
            <p className="text-4xl font-bold">Thanks for subscribing!</p>
            <p>A confirmation email has been sent to <b>{props.searchParams.email}</b>. Please open it and click the button inside to confirm our subscription.</p>
          </div>
          <button
            onClick={backToHome}

            className="bg-[#242742]
          text-white rounded-xl p-4 hover:bg-[#FF6257]"
          >Dismiss message</button>
        </div>
      </Card >
    </div >

  );

}

