import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FormFileInputProps {
  name: string;
  accept?: string;
  maxSize?: number;
  label?: string;
}

interface FileWithPreview extends File {
  preview?: string;
}

const FormFileInput = ({
  name,
  accept = '.png,.jpg,.jpeg',
  maxSize = 5 * 1024 * 1024, // 5MB default
  label = '파일 올리기',
}: FormFileInputProps) => {
  const { register, setValue, watch } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>('');
  const [isDragOver, setIsDragOver] = useState(false);

  const selectedFile = watch(name) as FileWithPreview;

  const validateFile = (file: File): boolean => {
    const allowedTypes = accept.split(',').map((type) => type.replace('.', ''));
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    if (!fileExtension || !allowedTypes.includes(fileExtension)) {
      setError('PNG 또는 JPG 파일만 업로드 가능합니다.');
      return false;
    }

    if (file.size > maxSize) {
      setError(
        `파일 크기는 ${Math.floor(maxSize / 1024 / 1024)}MB 이하여야 합니다.`
      );
      return false;
    }

    setError('');
    return true;
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && validateFile(file)) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setValue(
          name,
          {
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified,
            base64: base64String,
          },
          { shouldValidate: true }
        );
      };
      reader.readAsDataURL(file);
    } else {
      setValue(name, null);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);

    const file = event.dataTransfer.files[0];
    if (file && validateFile(file)) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setValue(
          name,
          {
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified,
            base64: base64String,
          },
          { shouldValidate: true }
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setValue(name, null, { shouldValidate: true });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { ref: registerRef, ...rest } = register(name);

  return (
    <div className={cn('w-full')}>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          'w-full rounded-lg cursor-pointer transition-colors p-1 pl-2',
          isDragOver && 'bg-primary-50'
        )}
      >
        {!selectedFile ? (
          <div className={cn('flex items-center justify-start gap-1')}>
            <Image src="/icon/upload.png" width={12} height={12} alt="upload" />
            <span className={cn('text-xs text-gray-500')}>{label}</span>
          </div>
        ) : (
          <div
            className={cn(
              'flex items-center justify-start border border-1 p-3'
            )}
          >
            <div className={cn('flex items-center gap-2')}>
              <span className={cn('text-sm text-gray-700')}>
                {selectedFile.name}
              </span>
              <span className={cn('text-xs text-gray-400')}>
                ({Math.round(selectedFile.size / 1024)} Kb)
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className={cn('p-1 rounded-full hover:bg-gray-100')}
            >
              <X className={cn('w-4 h-4 text-gray-500')} />
            </button>
          </div>
        )}
      </div>
      {error && <p className={cn('mt-2 text-sm text-red-500')}>{error}</p>}
      <input
        {...register(name)}
        ref={(e) => {
          register(name).ref(e);
          fileInputRef.current = e;
        }}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className={cn('hidden')}
      />
    </div>
  );
};

export default FormFileInput;
