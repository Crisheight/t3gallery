import {SignedIn, SignedOut} from "@clerk/nextjs";
import {getUserImages} from "~/server/queries";
import {getDefaultImages} from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function DefaultImages() {
    const images = await getDefaultImages();

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {images.map((image) => (
                <div key={image.id} className="flex max-w-xs flex-col">
                    <Link href={`/photos/${image.id}`}>
                        <Image
                            src={image.url}
                            style={{objectFit: "contain"}}
                            width={240}
                            height={240}
                            alt={image.name}
                        />
                    </Link>
                    <div>{image.name}</div>
                </div>
            ))}
        </div>
    );
}

async function UserImages() {
    const images = await getUserImages();

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {images.map((image) => (
                <div key={image.id} className="flex max-w-xs flex-col">
                    <Image
                        src={image.url}
                        style={{objectFit: "contain"}}
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

                <DefaultImages/>
            </SignedOut>

            <SignedIn>
                <UserImages/>
            </SignedIn>
        </main>
    );
}
