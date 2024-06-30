import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";
export const runtime = 'edge'

export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={2000} className="w-screen" />
      <Collections />
      <ProductList />

    </>
  );
}

export const dynamic = "force-dynamic";

