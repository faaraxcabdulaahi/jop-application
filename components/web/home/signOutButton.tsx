"use client"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/auth/authClient";

const SignOutButton = () => {
  return (
    <DropdownMenuItem onClick={async () => await signOut()}>
      Logout
    </DropdownMenuItem>
  );
};

export default SignOutButton;
