"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/auth/authClient";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
    const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        const result = await signOut();
        if (result.data) {
            router.push("/sign-in")
        }else{
            alert("Error signing out")
        }
      }}
    >
      Logout
    </DropdownMenuItem>
  );
};

export default SignOutButton;
