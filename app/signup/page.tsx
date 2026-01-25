"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Create an account to start tracking your jop application
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="JohnDoe@example.com" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="********" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">SignUp</Button>
            <p>Already have an account ? <Link href="/signin">Sign In</Link></p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
