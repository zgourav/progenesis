"use client";

import React from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Narhari S. Malgaonkar",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/dr-narhari.jpg",
  },
  {
    id: 2,
    name: "Mr. Prashant Aher",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/prashant-aher.jpg",
  },
  {
    id: 3,
    name: "Mr. Sandeep Aher",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/sandeep-aher.jpg",
  },
  {
    id: 4,
    name: "Dr. Sneha Patil",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/dr-sneha.jpg",
  },
  {
    id: 5,
    name: "Dr. Ramesh Kulkarni",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/dr-ramesh.jpg",
  },
  {
    id: 6,
    name: "Dr. Kavita Joshi",
    role: "Chief Fertility Consultant | Mumbai",
    image: "/team/dr-kavita.jpg",
  },
];

const LeadershipTeam: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* 1️⃣ Hero Section */}
      <section
        className="relative w-full h-[250px] md:h-[350px] flex items-center justify-start px-6 md:px-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/leadership-bg.jpg')", // must be in /public
        }}
      >
        <div className="relative z-10">
          <nav className="text-sm text-gray-600 mb-2">
            Home <span className="mx-1">›</span> About Us{" "}
            <span className="mx-1">›</span>{" "}
            <span className="text-blue-600 font-medium">Leadership Team</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            The Team Leading With Expertise & Compassion
          </h1>
        </div>
      </section>

      {/* 2️⃣ Team Members Section */}
      <section className="w-full px-6 md:px-24 py-16 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10">
          Our directors lead with vision and dedication
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="flex items-center gap-4 bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-lg transition"
            >
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadershipTeam;
