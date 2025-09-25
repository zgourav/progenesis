import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/home"); // 👈 change to your target page
}
