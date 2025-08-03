import { Modal } from "./modal";
import {getImageById} from "~/server/queries";

export default async function PhotoModal({
                                             params,
                                         }: {
    params: Promise<{ id: string }>;
}) {
    const photoId = (await params).id;

    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) {
        throw new Error("Invalid photo ID");
    }

    const idImage = await getImageById(idAsNumber);

    return <Modal>
        <img src={idImage.url} className="w-96" alt={idImage.name} />
    </Modal>;
}