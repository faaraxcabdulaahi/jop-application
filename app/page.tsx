"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("organize");
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job application.
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize and manage your jop search in one place
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="h-12 px-8 text-lg font-medium">
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>

              <p className="text-muted-foreground">
                Free forever. No credit card required
              </p>
            </div>
          </div>
        </section>

        {/* Hero images section with tabs */}
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* Tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button onClick={() => setActiveTab("organize")}>
                  Organize Application
                </Button>
                <Button onClick={() => setActiveTab("hired")}>Get Hired</Button>
                <Button onClick={() => setActiveTab("boards")}>
                  Manage Boards
                </Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "organize" && (
                  <Image
                    src="/heroSection/image-1.png"
                    alt="Organize Application"
                    width={1200}
                    height={800}
                  />
                )}

                {activeTab === "hired" && (
                  <Image
                    src="/heroSection/image-2.png"
                    alt="Get Hired"
                    width={1200}
                    height={800}
                  />
                )}
                {activeTab === "boards" && (
                  <Image
                    src="/heroSection/image-3.png"
                    alt="Manage Boards"
                    width={1200}
                    height={800}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
