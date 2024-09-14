import blurSvg from "@/app/svg/b12.svg";
import { CircleUser, Menu, Package2, Search, Sparkles, SquareArrowOutUpRight } from "lucide-react"
import noiseSvg from "@/app/svg/dots2.svg";
import thirdLayer from "@/app/svg/cccoil.svg";
import { EnvelopeOpenIcon, FileTextIcon, PersonIcon } from "@radix-ui/react-icons"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Input } from "@/components/ui/input"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
    <header className="sticky z-20 top-0 flex h-16 items-center gap-4 backdrop-blur-3xl bg-black/20 px-4 md:px-6 overflow-hidden">
        <nav className="hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Sparkles className="h-6 w-6" />
            <span className="sr-only">Reig Industries</span>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="https://cv.reigdev.hu"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            CV
          </Link>
          <Link
            href="https://legal.reigdev.hu"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Impressum
          </Link>

        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Sparkles className="h-6 w-6" />
                <span className="sr-only">Reig Industries</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="https://cv.reigdev.hu"
                className="text-muted-foreground hover:text-foreground"
              >
                CV
              </Link>
              <Link
                href="https://legal.reigdev.hu"
                className="text-muted-foreground hover:text-foreground"
              >
                Impressum
              </Link>

            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">

            </div>
          </form>
          <a href="https://hub.reigdev.hu">
              <Button className="bg-white ">
                Sign in
              </Button>
              </a>

        </div>
      </header>
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden" style={{ backgroundImage: `url(${blurSvg.src}), url(${noiseSvg.src}), url(${thirdLayer.src})`, backgroundSize: 'cover' }}>
      
      <div className="absolute inset-0 z-0">
      </div>
      
      <h1 className="relative z-10 text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center">
        Reig Industries.
      </h1>
      <h2 className="relative py-8 z-10 text-xl sm:text-2xl md:text-2xl lg:text-2xl font-normal tracking-widest text-center">
        CAREFULLY CRAFTED SOFTWARE
      </h2>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <Card className="backdrop-blur transition ease-in-out duration-700 bg-black/20">
                <CardHeader className="pb-3">
                  <CardTitle className="relative z-10 text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold tracking-tighter">Reig Hub</CardTitle>
                  <CardDescription className="text-balance max-w-lg leading-relaxed">
                    The all-in-one plugin platform for Minecraft server owners.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                <a href="https://hub.reigdev.hu">
                  <Button className="bg-indigo-500 text-white hover:text-black"><PersonIcon className="mr-2 h-4 w-4"></PersonIcon> Sign in to Reig Hub</Button>
                  </a>
                </CardFooter>
              </Card>
              <Card className="backdrop-blur transition ease-in-out duration-700 bg-black/20">
                <CardHeader className="pb-3">
                  <CardTitle className="relative z-10 text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold tracking-tighter">Matyas "Reig" Toth</CardTitle>
                  <CardDescription className="text-balance max-w-lg leading-relaxed">
                    The founder of Reig Industries.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button><FileTextIcon className="mr-2 h-4 w-4"></FileTextIcon> View CV</Button>
                </CardFooter>
              </Card>
      </div>




    </main>
    </>
  );
}
