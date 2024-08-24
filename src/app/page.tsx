import Link from "next/link";
import {db} from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
    });

    return (
        <main className="">
            <div className="flex flex-wrap gap-4 justify-center">

                { images.map((image) => (
                    <div key={image.id} className="max-w-sm">
                        <img src={image.url} alt="A list of streetphotography images in a row"/>
                    </div>
                ))}
            </div>
            <div className="flex justify-center m-3">
                <h1>Gallery in progress</h1>
            </div>
        </main>
    );
}
