"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Chivo, Rubik } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CodepenIcon from "@/components/icons/codeopen";
import NetworkIcon from "@/components/icons/network";
import CloudIcon from "@/components/icons/cloud";
import TypeIcon from "@/components/icons/type";
import TerraformIcon from "@/components/icons/terraform";
import NextjsIcon from "@/components/icons/nextjs";
import KubernetesIcon from "@/components/icons/kubernetes";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [messageName, setMessageName] = useState<string>("");
  const [messageFrom, setMessageFrom] = useState<string>("");
  const [messageBody, setMessageBody] = useState<string>("");

  const generateMessage = () =>
    encodeURIComponent(
      `Name: ${messageName}\nEmail: ${messageFrom}\nMessage: ${messageBody}`
    );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-6 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="#">Julien Dubois</Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link className="hover:underline" href="#about">
              About
            </Link>
            <Link className="hover:underline" href="#projects">
              Projects
            </Link>
            <Link className="hover:underline" href="#skills">
              Skills
            </Link>
            <Link className="hover:underline" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-16 px-4 md:px-8 lg:px-12" id="about">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Having initially nurtured a passion for development, my interest
                then extended to cloud technologies. Today, I try to combine the
                two under the <strong>DevOps</strong> umbrella. I&apos;m
                currently working at BeOp (becoming Collective Audience) as a
                DevOps engineer.
              </p>
              <div className="flex items-center">
                <Button asChild size="sm">
                  <Link href="https://github.com/RedbeanGit" target="_blank">
                    See my Github
                  </Link>
                </Button>
                <Button asChild size="sm" variant="link">
                  <Link href="/cv.pdf" target="_blank">
                    Download my CV
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                alt="Julien Dubois"
                className="rounded-full"
                width={300}
                height={300}
                src="/me.webp"
                priority={true}
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>
        <section
          className="bg-gray-100 dark:bg-gray-800 py-16 px-4 md:px-8 lg:px-12"
          id="projects"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent>
                  <Image
                    alt="Meetmapper"
                    className="rounded-t-lg"
                    src="/meetmapper.webp"
                    width={960}
                    height={540}
                    style={{
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-4 mt-4">
                    <h3 className="text-xl font-bold mb-2">MeetMapper</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      A modern connecting social network for travelers
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <Badge>React</Badge>
                      <Badge>Node.js</Badge>
                      <Badge>Nextjs</Badge>
                      <Badge>Nestjs</Badge>
                    </div>
                    <Button asChild size="sm" variant="link">
                      <Link href="https://meetmapper.com/" target="_blank">
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Image
                    alt="Lambdo"
                    className="rounded-t-lg"
                    src="/lambdo.webp"
                    width={960}
                    height={540}
                    style={{
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-4 mt-4">
                    <h3 className="text-xl font-bold mb-2">Faast Lambdo</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      A Function as a Service platform built with Rust using
                      Docker images to generate lightweight OS images for each
                      function.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <Badge>Rust</Badge>
                      <Badge>KVM</Badge>
                      <Badge>Docker</Badge>
                    </div>
                    <Button asChild size="sm" variant="link">
                      <Link href="https://faast-rt.com/" target="_blank">
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Image
                    alt="BeOp"
                    className="rounded-t-lg"
                    src="/beop.webp"
                    width={960}
                    height={540}
                    style={{
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-4 mt-4">
                    <h3 className="text-xl font-bold mb-2">BeOp</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      A cookieless and privacy-first sponsored and media content
                      server. Built for publishers and advertisers.
                    </p>
                    <div className="flex space-x-2 mb-4">
                      <Badge>React</Badge>
                      <Badge>Rescript</Badge>
                      <Badge>Clojure</Badge>
                      <Badge>AWS</Badge>
                    </div>
                    <Button asChild size="sm" variant="link">
                      <Link href="https://beop.io/" target="_blank">
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 md:px-8 lg:px-12" id="skills">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <KubernetesIcon className="w-12 h-12 mb-2" />
                <span className="text-gray-600 dark:text-gray-400">
                  Kubernetes
                </span>
              </div>
              <div className="flex flex-col items-center">
                <CloudIcon className="w-12 h-12 mb-2" />
                <span className="text-gray-600 dark:text-gray-400">AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <CloudIcon className="w-12 h-12 mb-2" />
                <span className="text-gray-600 dark:text-gray-400">
                  Google Cloud
                </span>
              </div>
              <div className="flex flex-col items-center">
                <TerraformIcon className="w-12 h-12 mb-2" />
                <span className="text-gray-600 dark:text-gray-400">
                  Terraform
                </span>
              </div>
              <div className="flex flex-col items-center">
                <NetworkIcon className="w-12 h-12 mb-2" />
                <span className="text-gray-600 dark:text-gray-400">
                  Node.js
                </span>
              </div>
              <div className="flex flex-col items-center">
                <TypeIcon className="w-12 h-12 mb-2" />
                <span className="text-gray-600 dark:text-gray-400">
                  TypeScript
                </span>
              </div>
              <div className="flex flex-col items-center">
                <CodepenIcon className="w-12 h-12 mb-2" />
                <span className="text-gray-600 dark:text-gray-400">React</span>
              </div>
              <div className="flex flex-col items-center">
                <NextjsIcon className="w-12 h-12 mb-2" />
                <span className="text-gray-600 dark:text-gray-400">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-gray-100 dark:bg-gray-800 py-16 px-4 md:px-8 lg:px-12"
          id="contact"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  value={messageName}
                  onChange={(event) =>
                    setMessageName(event.currentTarget.value)
                  }
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                  value={messageFrom}
                  onChange={(event) =>
                    setMessageFrom(event.currentTarget.value)
                  }
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={messageBody}
                  onChange={(event) =>
                    setMessageBody(event.currentTarget.value)
                  }
                />
              </div>
              <Button asChild className="w-full" type="submit">
                <Link
                  href={`mailto:dubois.julien.mail@gmail.com?subject=Contact%20from%20Portfolio&body=${generateMessage()}`}
                >
                  Send Message
                </Link>
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row">
          <p className="text-sm">© 2024 Julien Dubois</p>
          <div className="flex mt-4 sm:mt-0 sm:space-x-4 flex-col sm:flex-row items-center">
            <Link
              className="hover:underline"
              href="https://www.linkedin.com/in/julien-dubois-it/"
            >
              LinkedIn
            </Link>
            <Link
              className="hover:underline"
              href="https://github.com/RedbeanGit"
            >
              GitHub
            </Link>
            <Link
              className="hover:underline"
              href="mailto:dubois.julien.mail@gmail.com"
            >
              dubois.julien.mail@gmail.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
