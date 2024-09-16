"use client"

import blurSvg from "@/app/svg/b12.svg";
import { Building2, CloudIcon, CodeIcon, LightbulbIcon, Mail, Menu, MessageCircleHeart, Sparkles } from "lucide-react"
import noiseSvg from "@/app/svg/dots2.svg";
import hubBg from "@/app/img/reighubbg.png";


import macBookMockUp from "@/app/img/mockup.png";
import abstractPng from "@/app/svg/ccchaos.svg";
import { CubeIcon, FileTextIcon, PersonIcon } from "@radix-ui/react-icons"
import '@/app/css/page.css';



import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MacbookScrollLive } from "@/components/modules/MacbookScrollLive";


export default function Home() {




  return (
    <>

    <header className="sticky z-20 top-0 flex h-16 items-center gap-4 backdrop-blur-xl bg-black/20 px-4 md:px-6 overflow-hidden">
        <nav className="hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Sparkles className="h-6 w-6 text-white" />
            <span className="sr-only">Reig Industries</span>
          </Link>
          <Link
            href="#home"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#reig-hub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Hub
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
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
                <Sparkles className="h-6 w-6 text-white" />
                <span className="sr-only">Reig Industries</span>
              </Link>
              <Link
                href="#home"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="#reig-hub"
                className="text-muted-foreground hover:text-foreground"
              >
                Hub
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>

            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">

            </div>
          </form>
          <a href="https://hub.reigindustries.com">
              <Button className="bg-white ">
                Sign in
              </Button>
              </a>

        </div>
      </header>
    <main id="home" className="relative flex flex-col items-center px-4 justify-center min-h-screen overflow-hidden" style={{ backgroundImage: `linear-gradient(to bottom, transparent, black), url(${blurSvg.src}), url(${noiseSvg.src})`, backgroundSize: 'cover' }}>
      
      <div className="absolute inset-0 z-0">
      </div>
      
      <h1 className="relative z-10 text-white text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center">
        Reig Industries.
      </h1>
      <h2 className="relative py-8 z-10 text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl font-normal tracking-widest text-center">
        CAREFULLY CRAFTED SOLUTIONS
      </h2>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <Card className="backdrop-blur shining-card transition ease-in-out duration-700 bg-black/20"
      >
                <CardHeader className="pb-3">
                  <CardTitle className="relative z-10 text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold tracking-tighter">Reig Hub</CardTitle>
                  <CardDescription className="text-balance max-w-lg leading-relaxed">
                    The all-in-one plugin platform for Minecraft server owners.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                <a href="https://hub.reigindustries.com">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white hover:text-white"><PersonIcon className="mr-2 h-4 w-4"></PersonIcon> Sign in to Reig Hub</Button>
                  </a>
                </CardFooter>
              </Card>
              <Card className="backdrop-blur transition ease-in-out duration-700 bg-black/20">
                <CardHeader className="pb-3">
                  <CardTitle className="relative z-10 text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold tracking-tighter">Matyas &quot;Reig&quot; Toth</CardTitle>
                  <CardDescription className="text-balance max-w-lg leading-relaxed">
                    The founder of Reig Industries.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                <a href="https://reigdev.hu">
                  <Button><FileTextIcon className="mr-2 h-4 w-4"></FileTextIcon> View CV</Button>
                  </a>
                </CardFooter>
              </Card>
      </div>

      

    </main>

    <main>

    <div id="services" className="w-full bg-black text-white py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <CodeIcon className="mr-2 h-6 w-6 text-blue-500" />
                Custom Software Development
              </h4>
              <p className="text-gray-300">We specialize in creating bespoke software solutions tailored to your unique business needs. From web applications to mobile apps, we&apos;ve got you covered.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <CubeIcon className="mr-2 h-6 w-6 text-green-500" />
                Minecraft Server Plugins
              </h4>
              <p className="text-gray-300">Enhance your Minecraft server with our custom plugins. We offer both off-the-shelf and tailor-made solutions to make your server stand out.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <CloudIcon className="mr-2 h-6 w-6 text-purple-500" />
                Cloud Solutions
              </h4>
              <p className="text-gray-300">Leverage the power of the cloud with our expertise in cloud architecture, migration, and management services.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <LightbulbIcon className="mr-2 h-6 w-6 text-yellow-500" />
                Consulting Services
              </h4>
              <p className="text-gray-300">Get expert advice on software architecture, technology stack selection, and best practices in software development.</p>
            </div>
          </div>
        </div>
      </div>
      

      </main>

      <main>

    <div id="reig-hub" className="w-full  text-white md:py-32 px-4 md:px-6 overflow-hidden bg-black" style={{backgroundImage: `url(${hubBg.src})`}}>

        <div className="max-w-6xl mx-auto flex items-center justify-between relative min-h-[600px]">
          <div className="max-w-xl z-10">
            <h2 className="text-6xl font-bold mb-6 tracking-tighter">Reig Hub</h2>
            <p className="text-xl text-gray-300 mb-8">The game changer Minecraft plugin platform.</p>
            <a href="https://hub.reigindustries.com">
            <button className="bg-blue-500 shining-card hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
              Learn More
            </button>
            </a>
          </div>
          <div className="hidden md:block absolute md:-right-1/2 lg:-right-1/4 xl:-right-1/3">
            <img
              src={macBookMockUp.src}
              alt="Reig Hub Example"
              className="w-[1000px] h-auto object-cover rounded-lg transform transition-all duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(var(--rotate-y, 0deg)) rotateX(var(--rotate-x, 0deg))`,
                transition: 'transform 0.3s ease-out',
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((x - centerX) / centerX) * 20;
                const rotateX = ((centerY - y) / centerY) * 20;
                e.currentTarget.style.setProperty('--rotate-y', `${rotateY}deg`);
                e.currentTarget.style.setProperty('--rotate-x', `${rotateX}deg`);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--rotate-y', '0deg');
                e.currentTarget.style.setProperty('--rotate-x', '0deg');
              }}
            />
          </div>
        </div>
      </div>
      

      </main>

      <main>

              <MacbookScrollLive></MacbookScrollLive>
      

      </main>

      

      <main>

      <div id="contact" className="w-full bg-white text-black py-20 px-4 md:px-6" style={{
        backgroundImage: `linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5)), linear-gradient(to top, transparent, rgba(255, 255, 255, 0.5)), url(${abstractPng.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        imageRendering: 'auto',
      }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-8">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-lg shadow-xl">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Mail className="mr-2 h-6 w-6 text-rose-700" />
                Email
              </h4>
              <p className="text-gray-500">
                <a href="mailto:contact@reigindustries.com" className="hover:underline">
                  contact@reigindustries.com
                </a>
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-lg shadow-xl">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <MessageCircleHeart className="mr-2 h-6 w-6 text-indigo-400" />
                Discord
              </h4>
              <p className="text-gray-500">
                <a href="https://discord.gg/tv2mJESUSk" className="hover:underline">
                <Button>Click to join</Button>
                </a>
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-lg md:col-span-2 shadow-xl">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Building2 className="mr-2 h-6 w-6 text-blue-400" />
                Company Details
              </h4>
              <p className="text-gray-500">
                Tóth Mátyás EV.<br />
                3562 Onga<br />
                Berzsenyi Dániel utca 16.<br />
                Hungary
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-white py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Reig Industries</h3>
              <p className="text-gray-400">Carefully crafted solutions.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#reig-hub" className="text-gray-400 hover:text-white transition-colors">Reig Hub</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="https://legal.reigindustries.com" className="text-gray-400 hover:text-white transition-colors">Impressum</a></li>

              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-400">
            <p>&copy; 2024 Reig Industries. All rights reserved.</p>
          </div>
        </div>
      </div>
  

      </main>
    
    </>
  );
}
