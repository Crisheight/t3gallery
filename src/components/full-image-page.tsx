import {getImageById} from "~/server/queries";
import Image from "next/image";

export default async function FullPageImage(props: { photoId: number }) {
    if (isNaN(props.photoId)) {
        throw new Error("Invalid photo ID");
    }

    const idImage = await getImageById(props.photoId);

    return (
        <div className="flex w-full h-full min-w-0 bg-green-500">
            <div className="flex-shrink">
                <Image
                    src={idImage.url}
                    alt={idImage.name}
                    priority={true}
                    width={1000}
                    height={1000}
                    style={{ width: "65%" , height: "auto"}}
                    className="flex-shrink"
                />
            </div>
            <div className="flex flex-col flex-shrink-0w-48">
                <div className="text-xl font-bold">{idImage.name}</div>
            </div>
        </div>
    );
}