import {SignInButton, SignedOut, UserButton, SignedIn} from "@clerk/nextjs";

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
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}