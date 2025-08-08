import FullPageImage from "~/components/full-image-page";

export default function PhotoPage({
                                       params,
                                   }: {
    params: { id: string };
}) {
    const photoId = params.id;

    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) {
        throw new Error("Invalid photo ID");
    }

    return <FullPageImage photoId={idAsNumber} />
}