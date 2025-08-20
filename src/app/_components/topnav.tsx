"use client";

import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {SimpleUploadButton} from "~/app/_components/simple-upload-button";

export function TopNav() {
    useRouter();
    return (
        <nav className="flex w-full justify-between items-center p-4 text-xl
        font-semibold border-b-2">
            <div>Gallery</div>

            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <SimpleUploadButton />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}