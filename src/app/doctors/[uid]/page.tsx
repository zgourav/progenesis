import React from "react";
import SingleDoctor from "@/page-components/doctors/SingleDoctor";

export default function Page({ params }: { params: { locale: string; uid: string } }) {
  const { uid } = params;
  return <SingleDoctor selectedSlug={uid} />;
}