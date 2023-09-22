import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import React from 'react'
import { TbPhotoPlus } from 'react-icons/tb';

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload = ({
  onChange,
  value
}: ImageUploadProps) => {

  const handleUpload = (result: any) => {
    console.log('result', result);
    onChange(result.info.secure_url);
  }

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={''}
      options={{
        maxFiles: 1
      }}
    >
      {({open}) => {
        return (
          <div
            onClick={() => open?.()}
            className='
              relative 
              flex 
              flex-col 
              items-center 
              justify-center 
              gap-4
              p-20
              transition
              border-2
              border-dashed
              cursor-pointer
              hover:opacity-70
              border-neutral-300
              text-neutral-300
            '
          >
            <TbPhotoPlus size={50} />
            {value && (
              <div>
                <Image
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                  alt=''
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload