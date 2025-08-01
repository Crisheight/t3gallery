import {SignedIn, SignedOut} from "@clerk/nextjs";
import {GetUserImages} from "~/server/queries";
import {GetDefaultImages} from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function DefaultImages() {
    const images = await GetDefaultImages();

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {images.map((image) => (
                <div key={image.id} className="flex flex-col max-w-xs">
                    <Image
                        src={image.url}
                        alt={image.name}
                        width={400}
                        height={300}
                    />
                    <div>{image.name}</div>
                </div>
            ))}
        </div>
    )
}

async function UserImages() {
    const images = await GetUserImages();

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {images.map((image) => (
                <div key={image.id} className="flex flex-col max-w-xs">
                    <Image
                        src={image.url}
                        alt={image.name}
                        width={400}
                        height={300}
                    />
                    <div>{image.name}</div>
                </div>
            ))}
        </div>
    )
}

export default async function HomePage() {

    return (
        <main className="">

            <SignedOut>
                <div className="w-full h-full text-2xl text-center mb-3">
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
