import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={200} height={200} className="w-screen" />
      <Collections />
      <ProductList />
      
    </>
  );
}

export const dynamic = "force-dynamic";

