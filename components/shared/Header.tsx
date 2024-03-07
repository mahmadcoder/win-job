import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
const Header = () => {
  return (
    <header className="w-full border-b bg-primary-50 bg-dotted-pattern bg-cover bg-fixed">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="/assets/images/WinJob-logos_black.png" width={128} height={38} alt="Dragon Email"/>
        </Link>
        <div className="flex w-32 justify-end gap-3"> 
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header