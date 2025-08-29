import { authClient } from "@/lib/auth-client";

export const signInWithGoogle = () => {
  authClient.signIn.social({
    provider: "google",
    callbackURL: "/" 
  });
};
