import { CldUploadWidget } from "next-cloudinary";
import { Plus, Trash } from "lucide-react";

import { Button } from "./ui/button";
import Image from "next/image";
import useCart from "@/lib/hooks/useCart";

interface ImageUploadProps {
  itemId: string;
  value?: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({ itemId, value }) => {
  const updateItemImages = useCart((state) => state.updateItemImages);

  const onUpload = (result: any) => {
    const newImage = result.info.secure_url;
    const updatedImages = [...(value || []), newImage];
    updateItemImages(itemId, updatedImages);
  };

  const onRemove = (url: string) => {
    const updatedImages = (value || []).filter((image) => image !== url);
    updateItemImages(itemId, updatedImages);
  };

  return (
    <div className="w-full flex justify-end">

      <div className="w-full mb-4 flex items-center gap-4 justify-end mx-2">
        {value?.map((url) => (
          <div key={url} className="relative w-[50px] h-[50px]">
            <div className="absolute top-[-4px] right-[-4px] z-10">
              <Button
                type="button"
                variant={"default"}
                onClick={() => onRemove(url)}
                size="sm"
                className="bg-red-600 text-white p-1 flex flex-row gap-0 h-max"
              >
                <Trash className="h-2 w-2" />
              </Button>
            </div>
            <Image src={url} alt="collection" className="object-cover rounded-lg" fill />
          </div>
        ))}
      </div>

      <CldUploadWidget uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET} onUpload={onUpload}>
        {({ open }) => (
          <Button type="button" onClick={() => open()} className="text-white"
            variant={"default"}>
            <Plus className="h-4 w-4 mr-2" />
            Upload Image
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
