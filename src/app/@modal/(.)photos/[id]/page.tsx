import { Modal } from "./modal";
import {getImageById} from "~/server/queries";
import Image from "next/image";

export default async function PhotoModal({
                                             params,
                                         }: {
    params: { id: string };
}) {
    const photoId = params.id;

    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) {
        throw new Error("Invalid photo ID");
    }

    const idImage = await getImageById(idAsNumber);

    return (
        <Modal>
            <Image
                src={idImage.url}
                width={92}
                height={69}
                alt={idImage.name} />
        </Modal>
    );
}