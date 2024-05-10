import Link from "next/link";

const mockURLs = [
        "https://utfs.io/f/6dac1d1c-8bcf-48ce-82fc-d947cb1b078b-ruqu3i.jpg",
        "https://utfs.io/f/4dfc29ed-9fa9-49f4-9386-b42f11de7f51-wezvqs.jpg",
        "https://utfs.io/f/3dbf4854-c288-4eca-9303-7b3b68740358-up810f.jpg",
        "https://utfs.io/f/d42da28d-196a-459e-865a-8300fe986a96-rusg7k.jpg",
        "https://utfs.io/f/44754a30-2a65-40df-a923-6d3c15795712-y9d8pu.jpg",
        "https://utfs.io/f/b126a4f0-df44-40fc-b3d8-e69b9dde68ec-p8vwou.jpg",
        "https://utfs.io/f/94ea960c-8bba-465f-84d7-11aaf917f552-xx6sd.jpg",
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
                <div key={image.id} className="max-w-2xl">
                    <img src={image.url} alt="A list of placeholder images in a row" />
                </div>
            ))}
        </div>
      Hello (gallery in progress)
    </main>
  );
}
