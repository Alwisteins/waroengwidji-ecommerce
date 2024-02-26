import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { Rubik } from "next/font/google";

export const rubik = Rubik({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

type Navlinks = {
  url: string;
  name: string;
}[];

const navlinks: Navlinks = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/shop",
    name: "Shop",
  },
];

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-5 box-border">
      <Image
        src="/Logo.svg"
        alt="Waroengwidji Logo"
        width={188}
        height={53}
        priority
        className="pb-3"
      />
      <nav>
        <ul className={`flex space-x-14 ${rubik.className} text-lg`}>
          {navlinks.map((link) => (
            <li key={link.name}>
              <Link href={link.url} className='px-5 py-2 rounded-xl hover:text-green-50 hover:bg-amber-400 activer:bg-amber-400 focus:ring focus:ring-amber-200'>{link.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/login" className='px-7 py-2 rounded-xl text-green-50 bg-green-700 focus:ring focus:ring-green-800'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
