"use client";

export default function VideoSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/home/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
