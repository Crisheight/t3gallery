import {getImageById} from "~/server/queries";
import Image from "next/image";
import {clerkClient} from "@clerk/nextjs/server";

export default async function FullPageImage(props: { photoId: number }) {
    if (isNaN(props.photoId)) {
        throw new Error("Invalid photo ID");
    }

    const image = await getImageById(props.photoId);

    const userId = image.userId;
    let uploaderName = "Unknown user";

    if (userId.startsWith("user_")) {
        try {
            const user = await clerkClient.users.getUser(userId);
            uploaderName =
                user.fullName ??
                user.username ??
                user.primaryEmailAddress?.emailAddress ??
                "Unknown user";
        } catch {
            uploaderName = "Unknown user";
        }
    }

    return (
        <div className="flex h-[80vh] w-[90vw] max-w-[1200px] overflow-hidden rounded-lg bg-black/80">
            <div className="relative h-full flex-1 min-w-0">
                <Image
                    src={image.url}
                    alt={image.name}
                    priority
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 70vw"
                />
            </div>
            <div className="w-72 min-w-0 border-l border-white overflow-auto">
                <div className="text-lg text-center border-b p-2">{image.name}</div>

                <div className="flex flex-col p-2">
                    <span>Uploaded By:</span>
                    <span>{uploaderName}</span>
                </div>
            </div>
        </div>
    );
}
