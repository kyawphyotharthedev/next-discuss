import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";
import SearchInput from "./common/search-input";
import { Suspense } from "react";
import Loading from "./common/loading-screen";

export default function Header() {
  return (
    <Navbar className="shadow-md mb-5 rounded-md">
      <NavbarBrand className="font-bold text-xl">
        <Link href="/">Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense fallback={<Loading />}>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
