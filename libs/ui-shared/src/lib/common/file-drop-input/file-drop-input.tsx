import { useState } from 'react';
import { CloseIcon } from '../../icons/icons';

export interface FileDropInputProps {
  maxSizeKB?: number;
  allowedMimeTypes?: string[];
  onChange: (file: File | null) => void;
  value: File | null;
  setImageUploadError: (value: string) => void;
}

const ImagePreview = ({
  preview,
  onRemoveClick,
}: {
  preview: File | null;
  onRemoveClick: () => void;
}) => {
  if (!preview) return null;
  console.log(preview);
  return (
    <div className="relative">
      <img
        src={preview === null ? '' : URL.createObjectURL(preview)}
        alt=""
        className="object-cover h-64 w-full rounded-xl"
      />
      <button
        onClick={onRemoveClick}
        className="icon-btn-error absolute top-4 right-4"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export function FileDropInput({
  maxSizeKB = 1024 * 5,
  allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'],
  onChange,
  value,
  setImageUploadError,
}: FileDropInputProps) {
  const [dragging, setDragging] = useState<boolean>(false);

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    console.log('handleDrop: ', file);
    validateFile(file);
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    console.log('handleFileInput: ', file);
    validateFile(file);
  };

  const validateFile = (file: File | null) => {
    if (!file) return;
    console.log('validateFile: ', file);
    if (!allowedMimeTypes.includes(file.type)) {
      console.log('validateFile: ', file.type);
      setImageUploadError('Please select an image file');
    } else if (file.size > maxSizeKB * 1024) {
      console.log('validateFile: ', file.size);
      setImageUploadError(
        `File size is too large. Maximum limit ${maxSizeKB}KB.`
      );
    } else {
      onChange(file);
      setImageUploadError('');
    }
  };

  const handleRemoveImage = () => onChange(null);

  return (
    <div
      data-testid="file-drop-input"
      className="w-full"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <ImagePreview preview={value} onRemoveClick={handleRemoveImage} />

      {!value && (
        <div>
          <label
            htmlFor="file-drop-input"
            className="cursor-pointer overflow-hidden w-full p-4 flex flex-col items-center justify-center border-2 border-divider border-dashed rounded   text-gray-600 transition-colors"
          >
            {/* {!compact && <img src={null} alt="Upload" className="-mt-6 h-44" />} */}
            <p className="mb-2 text-sm">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs">PNG, JPG or JPEG (MAX. 5MB)</p>
            <input
              id="file-drop-input"
              type="file"
              accept={allowedMimeTypes.join(',')}
              onChange={handleFileInput}
              className="hidden"
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default FileDropInput;
