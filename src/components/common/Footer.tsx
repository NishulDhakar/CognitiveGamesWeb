"use client";

import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full py-6 ">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
          <p>
            &copy; {new Date().getFullYear()} Nishul Dhakar. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link> */}
            <Link
              href="https://nishul.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
