import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { BrainCircuitIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="absolute top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center">
          <a href="/">
            <div className="flex items-center justify-center">
              <BrainCircuitIcon />
              <span className="ml-2 text-lg ">JAKOB THRANE</span>
            </div>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a className="text-sm font-medium " href="/#work">
              Work
            </a>
            <a className="text-sm font-medium" href="/#help">
              Help
            </a>
            <a
              className="text-sm font-medium"
              href="https://www.linkedin.com/in/thranejakob"
            >
              <LinkedInLogoIcon />
            </a>
            <a
              className="text-sm font-medium"
              href="https://github.com/jakthra"
            >
              <GitHubLogoIcon />
            </a>
          </nav>
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-600">
            © 2023 Jakob Thrane. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            {/* <Link className="text-xs hover:underline underline-offset-4" href="#"> */}
            {/* Terms of Service */}
            {/* </Link> */}
            {/* <Link className="text-xs hover:underline underline-offset-4" href="#"> */}
            {/* Privacy */}
            {/* </Link> */}
          </nav>
        </footer>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
