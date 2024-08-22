import Link from "next/link";
import {db} from "~/server/db";

const mockURLs = [
        "https://utfs.io/f/ee56d692-be94-4e58-9f87-498c8c0ffcae-j3soqn.jpg",
        "https://utfs.io/f/46ac12f9-78e0-4146-ab79-7ff48c40802d-d36jv.jpg",
        "https://utfs.io/f/3e45600d-83b6-4659-a66c-46b0824c8c91-z48gyu.jpg",
        "https://utfs.io/f/60380cd8-c8d3-4d24-840b-76f703ed1580-x1x71m.jpg",
        "https://utfs.io/f/d1dfcd2c-8eb1-413f-9fc0-a5fe22f8cd65-a5dl21.jpg",
        "https://utfs.io/f/ebb06af7-1813-46f4-9541-3a8d98b4530e-p57s6x.jpg",
        "https://utfs.io/f/ce2bf36f-b262-470f-bdab-c84a9865c9cf-hbxnit.jpg",
        "https://utfs.io/f/c3d40516-1084-4933-b386-b9c137774d5b-c44zw4.jpg",
    ];

const mockImages = mockURLs.map((url, index) => ({
    id: index + 1,
    url,
}));

export default async function HomePage() {

    const posts = await db.query.posts.findMany();

    return (
        <main className="">
            <div className="flex flex-wrap gap-4 justify-center">
                { posts.map((post) => (
                    <div key={post.id}>{post.name}</div>
                ))}
                { mockImages.map((image) => (
                    <div key={image.id} className="max-w-sm">
                        <img src={image.url} alt="A list of placeholder images in a row"/>
                    </div>
                ))}
            </div>
            <div className="flex justify-center m-3">
                <h1>Gallery in progress</h1>
            </div>
        </main>
    );
}
