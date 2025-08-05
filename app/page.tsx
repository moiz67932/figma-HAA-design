"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { ProviderCallout } from "@/components/sections/provider-callout";
import { PricingTable } from "@/components/sections/pricing-table";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import Image from "next/image";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                <Image src="/Logo.jpg" alt="Logo" width={48} height={48} />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-12">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#0056B3] transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-[#0056B3] transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-[#0056B3] transition-colors font-medium"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#0056B3] transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#0056B3] transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-[#0056B3] font-medium"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-[#FF7A00] hover:bg-[#E6690A] text-white px-6 py-2 rounded-full font-medium">
                  Join Us for Free
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-[#0056B3] transition-colors px-4 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-[#0056B3] transition-colors px-4 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-[#0056B3] transition-colors px-4 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-[#0056B3] transition-colors px-4 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-[#0056B3] transition-colors px-4 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="flex flex-col gap-2 px-4 pt-4 border-t border-gray-200">
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      className="w-full text-gray-700 hover:text-[#0056B3] font-medium"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full bg-[#FF7A00] hover:bg-[#E6690A] text-white rounded-full font-medium">
                      Join Us for Free
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Provider Callout */}
      <ProviderCallout />

      {/* Pricing Table */}
      <PricingTable />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
