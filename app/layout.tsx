import Link from "next/link"
import "../app/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header className = "pt-1 pb-4">
      <nav className="flex justify-between item-center w-[92%] pt- mx-auto">
        <Link href="/">
          <img className="flex absolute mt-1 w-16" src="images/CRoCLogo.png"></img>
          <h1 className="text-6xl ml-20 text-white font-croc-logo hidden md:inline-block">Curtin Robotics Club</h1>
          <h1 className="text-6xl ml-20 text-white font-croc-logo inline-block md:hidden">CRoC</h1>
        </Link>
        <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex sm:flex-row flex-col sm:item-center gap-8 2xl:gap-[4vw] text-white mt-3">
            <li>
              <a className="hover:text-croc-blue" href="/project-home">Projects</a>
            </li>
            <li>
              <a className="hover:text-croc-blue" href="https://croc.tidyhq.com/public/schedule/events">Events</a>
            </li>
            <li>
              <a className="hover:text-croc-blue" href="/about-us">About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="https://croc.tidyhq.com/public/membership_levels">
            <button className="bg-white md:text-base text-xs text-croc-dark-blue px-5 py-2 rounded-full hover:bg-croc-blue hover:text-white md:mt-4 mt-5">Become a Member</button>
          </a>
        </div>
      </nav>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-croc-light-grey py-6 text-left px-8 text-croc-light-grey text-xs flex justify-between">
        <div>
        <h3>Find Us: Building 215 Engineering Pavilion, Curtin University Bentley</h3>
        <Link href="/about-us">
          <h3>Contact Us: contact@curtinrobotics.org</h3>
        </Link>
        </div>
        <Link href="https://www.facebook.com/CurtinRoboticsClub/">
          <img className="w-10" src="images/icon-fb.png"></img>
        </Link>
      </div>
    </footer>
  );

  return (
    <html>
      <head>
        <title>CRoC</title>
      </head>
      <body>
        <div className="bg-croc-very-dark-blue">
          {header}
          <div className="bg-croc-dark-blue">{children}</div>
          {footer}
        </div>
      </body>
    </html>
  )
}
