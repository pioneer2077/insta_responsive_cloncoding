"use client";
import React from "react";
import { ClientSafeProvider, signIn } from "next-auth/react";
type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: callbackUrl })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}
