import {Modal} from "./modal";
import FullPageImage from "~/components/full-image-page";

export default function PhotoModal({
                                             params,
                                         }: {
    params: { id: string };
}) {
    const photoId = params.id;

    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) {
        throw new Error("Invalid photo ID");
    }

    return (
        <Modal>
            <FullPageImage photoId={idAsNumber} />
        </Modal>
    );
}