/**
 * This method method returns a function which handles the posing of the image file
 * @param {Upload} upload the middleware gotten from multer. This makes it possible to get the file being posted
 * @param {function} addFIle A function that's being passed as an argument. This function takes the file then post it and returns the url
 * @returns {undefined}
 */
export const uploadedFile = function (upload, addFIle) {
  /**
   * This method takes in the requests from the client side then passes it on.
   */
  return function (req, res) {
    const file = upload.single('image');
    file(req, res, async () => {
      // ensures a file was being passed
      if (!req.file) {
        res.json({ successful: false, data: 'An error Occured. Try again' });
        return;
      }
      try {
        // sends the file for posting
        const data = await addFIle(req.file);
        // sends the result (url) back to the client
        res.json({ successful: true, data });
      } catch (err) {
        res.json({ successful: false, data: 'An error Occured. Try again' });
      }
    });
  };
};
