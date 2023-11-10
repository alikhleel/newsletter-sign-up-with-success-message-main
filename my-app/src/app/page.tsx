import Image from "next/image";
import { useState } from "react";
import theme from "tailwindcss/defaultTheme";
import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  return (
    <>
      <div className="sm:bg-[#242742] w-full min-h-screen static ">
        <div className="flex sm:justify-center sm:items-center h-full sm:min-h-screen w-full">
          <div className="grid grid-cols-1 sm:grid-cols-12 bg-white max-w-3xl rounded-2xl sm:p-4 sm:pl-0">
            <div className="sm:order-1 sm:col-span-5 ">
              <picture>
                <source
                  media={`(min-width: 640px`}
                  srcSet="/assets/images/illustration-sign-up-desktop.svg"
                />
                <Image
                  src={"/assets/images/illustration-sign-up-mobile.svg"}
                  sizes="100vw"
                  style={{
                    width: "100vw",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  width={0}
                  height={0}
                  alt="Intro illustration"
                />
              </picture>
            </div>
            <div className="p-6 pr-8 flex flex-col gap-2 col-span-7">
              <h2 className="font-bold text-[#36384e] text-4xl leading-relaxed">
                Stay updated!
              </h2>
              <p className="text-base font-normal ">
                Join 60,000+ product mangers receving monthly updates on:
              </p>
              <ul className="flex items-start gap-4 flex-col">
                <li className="flex items-start gap-4">
                  <Image
                    src={"/assets/images/icon-list.svg"}
                    width={24}
                    height={24}
                    alt="Arrow"
                  />
                  Product discovery and building what matters
                </li>
                <li className="flex items-start gap-4">
                  <Image
                    src={"/assets/images/icon-list.svg"}
                    width={24}
                    height={24}
                    alt="Arrow"
                  />
                  Measuring to ensure updates are a success
                </li>
                <li className="flex items-start gap-4">
                  <Image
                    src={"/assets/images/icon-list.svg"}
                    width={24}
                    height={24}
                    alt="Arrow"
                  />
                  And much more!
                </li>
              </ul>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
