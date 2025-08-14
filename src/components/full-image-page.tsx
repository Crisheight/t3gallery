import {getImageById} from "~/server/queries";
import Image from "next/image";

export default async function FullPageImage(props: { photoId: number }) {
    if (isNaN(props.photoId)) {
        throw new Error("Invalid photo ID");
    }

    const idImage = await getImageById(props.photoId);

    return (
        <div className="flex w-[100dvw] h-[100dvh] items-stretch bg-green-500 overflow-hidden">
            <div className="flex-1 overflow-hidden">
                <Image
                    src={idImage.url}
                    alt={idImage.name}
                    priority={true}
                    width={1000}
                    height={1000}
                    className="block h-auto w-[65%]"
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="flex flex-col flex-shrink-0 w-48 p-4">
                <div className="text-xl font-bold">{idImage.name}</div>
            </div>
        </div>
    );
}