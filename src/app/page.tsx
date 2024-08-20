import Link from "next/link";

const mockURLs = [
        "https://utfs.io/f/e7a60857-f6a2-4fa5-98a2-466f46584eae-8rzqre.jpg",
        "https://utfs.io/f/35750b94-d30f-4fd2-a4cf-ac72ca9c63fd-ano2y8.jpg",
        "https://utfs.io/f/c55f7fbf-c6ef-461d-a72d-88dce5c59f06-9vpytx.jpg",
        "https://utfs.io/f/d1ef1af3-6f1d-444e-975f-b9ba430e91d2-go0vx7.jpg",
        "https://utfs.io/f/f41e88be-d364-4c68-94ab-1e05fda25ff4-3jjx2a.jpg",
        "https://utfs.io/f/6b472fd9-2671-431c-bbf9-2901ff71f1c6-mlgcxg.jpg",
        "https://utfs.io/f/dbf773cc-2210-47ef-97df-f38e0f8b43c7-y1qd9s.jpg",
        "https://utfs.io/f/40e55783-093e-491d-baef-ea51706a7b26-pgk2iv.jpg",
    ];

const mockImages = mockURLs.map((url, index) => ({
    id: index + 1,
    url,
}));

export default function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-4 justify-center">{
            mockImages.map((image) => (
                <div key={image.id} className="max-w-lg">
                    <img src={image.url} alt="A list of placeholder images in a row"/>
                </div>
            ))}
        </div>
      Hello (gallery in progress)
    </main>
  );
}
