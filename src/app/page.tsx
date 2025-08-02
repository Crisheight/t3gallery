import { SignedIn, SignedOut } from "@clerk/nextjs";
import { GetUserImages } from "~/server/queries";
import { GetDefaultImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function DefaultImages() {
  const images = await GetDefaultImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex max-w-xs flex-col">
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={240}
            height={240}
            alt={image.name}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

async function UserImages() {
  const images = await GetUserImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex max-w-xs flex-col">
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={400}
            height={300}
            alt={image.name}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="mb-3 h-full w-full text-center text-2xl">
          Sign in to upload photos
        </div>

        <DefaultImages />
      </SignedOut>

      <SignedIn>
        <UserImages />
      </SignedIn>
    </main>
  );
}
