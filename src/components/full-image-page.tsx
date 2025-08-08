import {getImageById} from "~/server/queries";
import Image from "next/image";

export default async function FullPageImage(props: { photoId: number }) {
    if (isNaN(props.photoId)) {
        throw new Error("Invalid photo ID");
    }

    const idImage = await getImageById(props.photoId);

    return <Image
                src={idImage.url}
                alt={idImage.name}
                width={96}
                height={69}
    />;
}