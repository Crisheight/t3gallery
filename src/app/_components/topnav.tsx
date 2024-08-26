import {SignInButton, SignedOut, UserButton, SignedIn} from "@clerk/nextjs";
import {UploadButton} from "~/utils/uploadthing";

export function TopNav() {
    return (
        <nav className="flex w-full justify-between items-center p-4 text-xl
        font-semibold border-b-2">
            <div>Gallery</div>

            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <UploadButton endpoint="imageUploader"/>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}