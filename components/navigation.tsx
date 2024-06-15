import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export const Navigation = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-between xs:justify-end lg:py-16 md:py-10 sm:py-8 xs:py-6">
      <section
        className="md:w-1/2 sm:w-2/6 xs:w-1/4 lg:pl-36 md:pl-24 sm:pl-8 xs:pl-4"
        id="logo"
      >
        <Image src="/logo.svg" width="800" height="615" alt="logo"/>
      </section>
      <section
        className="md:w-1/2 sm:w-4/6 xs:w-3/4 flex flex-row xs:justify-end md:space-evenly lg:justify-end align-center items-center lg:pr-36 md:pr-24 sm:pr-2 xs:pr-4"
        id="links-and-phone"
      >
        <div className="xs:mr-2 sm:mr-11 lg:mr-28" id="links">
          <Link
            className="hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs"
            href="#link1"
          >
            Link 1
          </Link>
          <Link
            className="hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs"
            href="#link2"
          >
            Link 2
          </Link>
          <Link
            className="hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs"
            href="#link-3"
          >
            Link 3
          </Link>
        </div>
        <Button>Click me!</Button>
      </section>
    </nav>
  )
}