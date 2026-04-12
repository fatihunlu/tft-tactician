import { CompGallery } from "@/components/CompGallery";
import { getAllComps } from "@/lib/comps";

export default function Home() {
  const comps = getAllComps();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-10 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-red-300/90">
          TFT Set 17
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
          Space Gods — featured comps
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-red-100/75">
          Strong team comps and game plans for the current patch. Tier lists and units are
          maintained in data — check Riot patch notes for official traits and mechanics.
        </p>
      </header>
      <CompGallery comps={comps} />
    </div>
  );
}
