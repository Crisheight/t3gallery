import {getImageById} from "~/server/queries";
import Image from "next/image";

export default async function FullPageImage(props: { photoId: number }) {
    if (isNaN(props.photoId)) {
        throw new Error("Invalid photo ID");
    }

    const idImage = await getImageById(props.photoId);

    return (
        <div className="flex w-[90vw] h-[90vh] overflow-hidden">
            <div className="relative flex-1 min-w-0 flex">
                <Image
                    src={idImage.url}
                    alt={idImage.name}
                    priority
                    fill
                    className="object-contain object-left"
                    sizes="100%"
                />
            </div>
            <div className="shrink p-4 min-w-0 overflow-hidden">
                <div className="text-xl font-bold">{idImage.name}</div>
            </div>
        </div>
    );
}