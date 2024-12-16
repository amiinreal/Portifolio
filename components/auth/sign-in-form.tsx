"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function SignInForm() {
  return (
    <div className="grid gap-4">
      <Button
        variant="outline"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <Icons.google className="mr-2 h-4 w-4" />
        Sign in with Google
      </Button>
    </div>
  );
}