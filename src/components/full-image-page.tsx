import {getImageById} from "~/server/queries";
import Image from "next/image";

export default async function FullPageImage(props: { photoId: number }) {
    if (isNaN(props.photoId)) {
        throw new Error("Invalid photo ID");
    }

    const idImage = await getImageById(props.photoId);

    return (
        <div className="flex h-[80vh] w-[90vw] max-w-[1200px] overflow-hidden rounded-lg bg-black/80">
            <div className="relative h-full flex-1 min-w-0">
                <Image
                    src={idImage.url}
                    alt={idImage.name}
                    priority
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 70vw"
                />
            </div>
            <div className="w-72 min-w-0 border-l border-white/10 overflow-auto">
                <div className="text-xl font-bold">{idImage.name}</div>
            </div>
        </div>
    );
}