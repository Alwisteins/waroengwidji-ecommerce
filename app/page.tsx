import Image from "next/image";
import { rubik } from "@/components/Navbar";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${rubik.className}`}
    >
      <section className="flex items-center mt-[-85px]">
        <article>
          <header className="mb-3">
            <h1 className="font-bold text-6xl">
              Planting Smiles, One Order at a Time
            </h1>
          </header>
          <article>
            <p className="text-lg">
              Explore a botanical haven with our premium plant
              collection—perfect for enthusiasts and novice gardeners. Bring the
              outdoors into your space with captivating plants at your
              fingertips.
            </p>
          </article>
          <button>Explore Now</button>
        </article>
        <figure>
          <Image
            src="/plant-main-img.png"
            alt="Waroengwidji Logo"
            width={1200}
            height={1200}
            priority
            className="pb-3"
          />
        </figure>
      </section>
    </main>
  );
}
