"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import NavigationPill from "./NavigationPill";
import ROUTES from "@/constants/routes";

export default function NavWrapper() {
  const pathname = usePathname();
  return pathname === ROUTES.HOME ? <Navigation /> : <NavigationPill />;
}
