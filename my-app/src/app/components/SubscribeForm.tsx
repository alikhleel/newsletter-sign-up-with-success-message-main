"use client";

import React from "react";
import { submitSubscribeForm } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function SubscribeForm() {
  const router = useRouter();
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).elements.namedItem(
      "email"
    ) as HTMLFormElement;
    const invalidEmail = document.getElementById(
      "invalid-email"
    ) as HTMLFormElement;
    const isValid = isValidEmail(email.value);
    console.log(email.value, isValid);
    if (!isValid) {
      email.classList.add("ring-[#ff5574]", "text-[#ff5574]");
      invalidEmail.classList.remove("hidden");
    }
    if (isValid) {
      router.push("/done?email=" + email.value)

    }
  }



  return (
    <form
      className="flex flex-col mt-4 gap-4"
      onSubmit={submit}
      // action={submitSubscribeForm}
      method="POST"
    >
      <div className="flex flex-row place-content-between">
        <label htmlFor="email">Email address</label>
        <p id="invalid-email" className="text-[#ff5574] hidden">
          Invalid email
        </p>
      </div>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="email@company.com"
        className="ring-[0.5px] p-4 rounded-lg
     ring-[#36384e] focus:ring-[#36384e] focus:ring-[0.5px]
     "
      />
      <button
        className="rounded-xl bg-[#242742] p-4 text-white hover:bg-gradient-to-r hover:to-[#ff5574] hover:from-[#FF6257]"
        type="submit"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
