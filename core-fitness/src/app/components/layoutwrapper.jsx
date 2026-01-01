"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const noNavbarRoutes = ["/SignIn"];
  const showNavbar = !noNavbarRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
}
