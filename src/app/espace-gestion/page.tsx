import type { Metadata } from "next";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false },
};

export default function EspaceGestion() {
  return <AdminClient />;
}
