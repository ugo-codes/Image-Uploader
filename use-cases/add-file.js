/**
 *
 * @param {String} API_KEY the api_key for the service were using to upload the image file
 * @param {FormData} FormData A dependency that behaves like the normal FormData in the normal JavaScript
 * @param {Axios} axios A dependecy used for sending and receiving http request
 * @returns A function that sends the actual file
 */
export const storeFile = function (API_KEY, FormData, axios) {
  /**
   * This method recevies the image file to be uploaded and returns the link to the uploaded image file
   * @param {File} file the file to be uploaded gotten fromt= the client side
   * @returns {Promise | Error} if the upload was successful, returns a Promise else returns an error
   */
  return async function (file) {
    //Creates a form data
    const formData = new FormData();

    // Adds the necessary information needed for the API for the file to be uploaded successfully
    formData.append('key', API_KEY);
    formData.append('image', file.buffer, file.originalname);

    try {
      const data = await axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: formData,
      });
      // console.log(`result = `, data.data.data.image.url)
      return data.data.data.image.url
    } catch (err) {
      throw err;
    }
  };
};
