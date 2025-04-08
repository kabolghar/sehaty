import React from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About Sehaty | Modern Healthcare Platform</title>
        <meta name="description" content="Learn about Sehaty - Our mission, vision, and the team behind the platform" />
      </Head>
      
      <main className="flex flex-col w-full items-center gap-[50px] bg-white px-4 md:px-6">
        <div className="w-full max-w-[1280px]">
          <h1 className="text-[#a818fc] text-4xl font-bold mb-4 mt-8">Our Motivation</h1>
          <p className="text-gray-600 mb-8">
            Sehaty was founded with a simple mission: to make healthcare accessible to everyone in Egypt and the Middle East. 
            We believe that finding the right doctor and booking appointments should be simple, transparent, and stress-free.
          </p>
        </div>

        <div className="w-full max-w-[1280px]">
          <img
            src="/about-image.jpg"
            alt="Healthcare Team"
            className="w-full h-[300px] object-cover rounded-xl mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-[#a918fd0d] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To transform healthcare access in the Middle East by connecting patients with the right healthcare providers through innovative technology.
              </p>
            </div>

            <div className="bg-[#a918fd0d] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                A world where quality healthcare is just a click away for everyone, regardless of location or background.
              </p>
            </div>

            <div className="bg-[#a918fd0d] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-gray-600">
                Accessibility, transparency, quality, and compassion guide everything we do at Sehaty.
              </p>
            </div>

            <div className="bg-[#a918fd0d] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Our Promise</h3>
              <p className="text-gray-600">
                Continuous innovation and improvement in healthcare service delivery for our community.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#a818fc] mb-8">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#a918fd1a] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#a818fc] text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Extensive Network</h3>
                  <p className="text-gray-600">Access to thousands of verified healthcare providers across specialties</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#a918fd1a] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#a818fc] text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">User-Friendly Platform</h3>
                  <p className="text-gray-600">Simple booking process designed with patients in mind</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#a918fd1a] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#a818fc] text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Verified Reviews</h3>
                  <p className="text-gray-600">Authentic patient feedback to help you make informed decisions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#a918fd1a] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#a818fc] text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Multilingual Support</h3>
                  <p className="text-gray-600">Services available in Arabic, English, and other regional languages</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#a818fc] mb-8">Meet Our Team</h2>
            <p className="text-gray-600 mb-8">
              Our diverse team of healthcare professionals, technologists, and customer service experts work together 
              to make Sehaty the leading healthcare platform in the region.
            </p>
          </div>
        </div>
      </main>
    </>
  );
} 