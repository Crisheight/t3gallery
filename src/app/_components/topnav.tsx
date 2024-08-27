"use client";

import {SignInButton, SignedOut, UserButton, SignedIn} from "@clerk/nextjs";
import {UploadButton} from "~/utils/uploadthing";
import {useRouter} from "next/navigation";

export function TopNav() {

    const router = useRouter();

    return (
        <nav className="flex w-full justify-between items-center p-4 text-xl
        font-semibold border-b-2">
            <div>Gallery</div>

            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={() => {
                            router.refresh();
                        }}
                    />

                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}