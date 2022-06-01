import { useState } from 'react';
import { UploadImage } from './components/UploadImage';
import LoadingBar from '../LoadingBar/LoadingBar';
import ImageUploaded from '../ImageUploaded/ImageUploaded';

export const ImageUploader = function () {
  // Specifies what component to show on the page
  const [showComponent, setShowComponent] = useState({
    showUploadImage: true,
    showLoadingBar: false,
    showImageUploaded: false,
  });

  // Contains the link of the uploaded image file
  const [uploadedImage, setUploadedFile] = useState('');

  return (
    <div>
      {/* This returns differenct views depending on what the user is doing*/}

      {/* This view enables the user to upload a picture  */}
      {showComponent.showUploadImage && (
        <UploadImage
          setShowComponent={setShowComponent}
          uploadImage={setUploadedFile}
        />
      )}
      {/* This view shows the progress bar */}
      {showComponent.showLoadingBar && (
        <LoadingBar showComponent={showComponent.showLoadingBar} />
      )}
      {/* This view shows the uploaded image with the link  */}
      {showComponent.showImageUploaded && (
        <ImageUploaded uploadedImage={uploadedImage} />
      )}
    </div>
  );
};
