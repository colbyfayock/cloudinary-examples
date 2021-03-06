import { useRef } from 'react';
import Script from "next/script";

const UploadWidget = ({ children, onUpload }) => {
  const cloudinary = useRef();
  const widget = useRef();

  /**
   * createWidget
   * @description Creates a new instance of the Cloudinary widget and stores in a ref
   */

  function createWidget() {
    // Providing only a Cloud Name along with an Upload Preset allows you to use the
    // widget without requiring an API Key or Secret. This however allows for
    // "unsigned" uploads which may allow for more usage than intended. Read more
    // about unsigned uploads at: https://cloudinary.com/documentation/upload_images#unsigned_upload

    const options = {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // Ex: mycloudname
      uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET, // Ex: myuploadpreset
    }

    return cloudinary.current?.createUploadWidget(options,
      function (error, result) {
        // The callback is a bit more chatty than failed or success so
        // only trigger when one of those are the case. You can additionally
        // create a separate handler such as onEvent and trigger it on
        // ever occurance
        if ( error || result.event === 'success' ) {
          onUpload(error, result, widget?.current);
        }
      }
    );
  }

  /**
   * open
   * @description When triggered, uses the current widget instance to open the upload modal
   */

  function open() {
    if ( !widget?.current ) {
      widget.current = createWidget();
    }

    widget?.current && widget.current.open();
  }

  /**
   * handleOnLoad
   * @description Stores the Cloudinary window instance to a ref when the widget script loads
   */

  function handleOnLoad() {
    cloudinary.current = window.cloudinary;
  }

  return (
    <>
      {children({ cloudinary: cloudinary.current, widget: widget.current, open })}
      <Script id="cloudinary" src="https://widget.cloudinary.com/v2.0/global/all.js" onLoad={handleOnLoad} />
    </>
  )
}

export default UploadWidget;