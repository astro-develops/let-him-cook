"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mentoring Teams",
    href: "/outreach/fll",
    description:
      "Bringing STEAM to younger students through unoffical FLL teams and events",
  },
  {
    title: "STEAM",
    href: "/outreach/steam",
    description:
      "Check out some of our Steam related events and workshops 303 puts together",
  },
  {
    title: "#IamValid",
    href: "/outreach/iamvalid",
    description: "In honor of our beloved LGBTQIA+ member, Charlie Schulz",
  },
  {
    title: "Other initiatives",
    href: "/outreach/other",
    description: "____",
  },
];

export default function Nav() {
  return (
    <>
      <div className="flex justify-between px-12 py-6 items-center fixed w-full bg-[#FBFBFB] z-[99]">
        <div>
          <Image src="/303.png" alt="logo" width={100} height={80} />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="../../../" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Team</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="bg-neutral-100 hover:bg-[#FBFBFB] flex transition-colors h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/team/history"
                      >
                        <div className="mb-2 text-lg font-semibold">
                          Our History
                        </div>
                        <p className="text-xs leading-tight text-muted-foreground">
                          From hardships to success and back, check out what
                          303&apos;s been able to accomplish
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/team/sponsors" title="Sponsors">
                    Huge thanks to our sponsors who make everything we do
                    possible.
                  </ListItem>
                  <ListItem href="/team/ramp" title="Ramp & Mentors">
                    Our proud team of parents and mentors, who guide us along
                    the way
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Outreach</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us!
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:bg-neutral-100 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug font-light text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
