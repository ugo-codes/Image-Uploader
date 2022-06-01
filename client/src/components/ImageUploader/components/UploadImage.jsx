import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import { FileDrop } from 'react-file-drop';

/**
 * This method returns a div showing the showing the image to be uploaded and the upload button
 * @returns a view which enables the user to upload an image
 */
export const UploadImage = function (props) {
  // This is the vairable that holds the file to be displayed and uploaded respectively
  // It's equals to useSate so as to make it easy to chabge the file
  const [selectedFile, setSelectedFile] = useState();
  const [uploadFile, setUploadedFile] = useState();

  /**
   *
   * @param {File} file the file to be uploaded
   * @returns [undefined]
   */
  const selectFile = function (file) {
    // Makes sure a file is being passed to the function
    if (!file) return;
    setSelectedFile(() => URL.createObjectURL(file));
    setUploadedFile(() => file);
  };

  /**
   * This function handles the result gotten from the server, receives the result as an argument.
   * @param {Object} result the result gotten from the server after making a post request
   */
  const handleResult = function (result) {
    // console.log(result)
    // Hides the loading bar and shows the view containing the link to the message
    props.setShowComponent(() => ({
      showUploadImage: false,
      showLoadingBar: false,
      showImageUploaded: true,
    }));
    if (!result.data.successful) return;

    props.uploadImage(() => result.data.data);
  };

  // This method sends the file to the server side
  const upload = async function () {
    // Ensures there is a file to be uploaded
    if (!selectedFile) return;

    // Hides this view and shows the loading bar view
    props.setShowComponent(() => ({
      showUploadImage: false,
      showLoadingBar: true,
      showImageUploaded: false,
    }));

    //An object where a key and a value can be set, also used for uploading files with axios
    const formData = new FormData();
    formData.append('image', uploadFile);

    try {
      // , {headers: {API_KEY:'5a615ca2be415b505352dd'}}
      // Sends the file to the server side
      const me = await axios.post('http://localhost:5000/upload', formData, {
        headers: { API_KEY: '5a615ca2be415b505352dd' },
      });
      if (!me) return;
      handleResult(me);
    } catch (err) {
      // Hides this loadin bar and shows this view
      props.setShowComponent(() => ({
        showUploadImage: true,
        showLoadingBar: false,
        showImageUploaded: false,
      }));
      alert('An error occured, please try again');
    }
  };

  return (
    <Paper className='centered' id='firstPaper'>
      <Container>
        {/* A text that says 'Upload your image' */}
        <Typography className='text' variant='subtitle1'>
          Upload your image
        </Typography>
        {/* A text that says 'File should be jpeg, png...' */}
        <Typography className='text' variant='body1'>
          File should be jpeg, png...
        </Typography>
        {/* Enables the drag and drop of the image file */}
        {/* more info on the FileDrop can be seen on the npm website (react-file-drop) */}
        <FileDrop onDrop={(files, _) => selectFile(files[0])}>
          {/* The div with the dotted border around it where the image is contained */}
          <Box
            id='pic'
            draggable={true}
            sx={{
              marginTop: '30px',
              height: '14rem',
              background: '#F6F8FB',
              border: '1px dashed #97BEF4',
            }}
          >
            {/* The image itself */}
            <Box
              id='image'
              component='img'
              width={selectedFile ? '100%' : null}
              height={selectedFile ? '90%' : null}
              src={selectedFile ?? `${process.env.PUBLIC_URL}/Images/image.svg`}
              sx={{ marginTop: '30px' }}
            ></Box>
            {/* A text saying 'Drag and drop your image here' */}
            <Typography sx={{ marginTop: '40px', color: '#BDBDBD' }}>
              Drag and drop your image here
            </Typography>
          </Box>
        </FileDrop>
        {/* A text saying 'Or' */}
        <Typography
          sx={{ color: '#BDBDBD', fontSize: '12px', marginTop: '20px' }}
        >
          Or
        </Typography>
        {/* The upload button at the end of the div */}
        <Button
          component='label'
          className='button'
          id='upload'
          onClick={selectedFile && upload}
        >
          {selectedFile ? 'Upload File' : 'Choose a file'}

          <input
            type={selectedFile ? null : 'file'}
            id='file'
            hidden
            onChange={event => selectFile(event.target.files[0])}
          />
        </Button>
      </Container>
    </Paper>
  );
};
