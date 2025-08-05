"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To simplify property and vehicle management for everyone, making organization effortless and accessible.",
    color: "bg-[#0056B3]",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A passionate group of developers, designers, and home/auto enthusiasts dedicated to solving real problems.",
    color: "bg-[#FF7A00]",
  },
  {
    icon: Award,
    title: "Our Commitment",
    description:
      "We're committed to building tools that save you time, money, and stress while protecting your investments.",
    color: "bg-green-500",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Privacy-first, user-focused, and community-driven. Your data is yours, and your success is our success.",
    color: "bg-purple-500",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Home & Auto Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Born from the frustration of lost warranties, missed maintenance,
            and scattered paperwork, HAA was created by homeowners and vehicle
            enthusiasts who knew there had to be a better way to stay organized.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  It started with a simple question: "Where did I put that
                  warranty?" After spending countless hours searching through
                  boxes of receipts and folders of documents, our founders
                  realized that managing home and vehicle information shouldn't
                  be this complicated.
                </p>
                <p>
                  We built HAA to be the solution we wished existed – a single,
                  secure place where all your property and vehicle information
                  lives, with smart reminders that actually work and tools that
                  save you time and money.
                </p>
                <p>
                  Today, thousands of homeowners and vehicle owners trust HAA to
                  keep their most valuable assets organized and well-maintained.
                  We're just getting started.
                </p>
              </div>
            </div>
            <div className="relative p-16">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0056B3]/20 to-[#FF7A00]/20 rounded-3xl blur-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  width={600}
                  height={400}
                  src="/Pic5.png"
                  alt="HAA team working together"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-full mb-6 ${value.color} flex items-center justify-center`}
                >
                  <value.icon
                    className="w-8 h-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#0056B3] to-[#FF7A00] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">HAA by the Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/90">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-white/90">Properties Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25,000+</div>
              <div className="text-white/90">Vehicles Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2M+</div>
              <div className="text-white/90">In Warranties Saved</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Learn More?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to hear from you. Whether you have questions, feedback, or
            just want to say hello.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@haa.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0056B3] hover:bg-[#004494] text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF7A00] hover:bg-[#E6690A] text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
