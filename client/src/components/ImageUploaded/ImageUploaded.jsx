import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

/**
 * This method returns a view  which shows the image uploaded and the link to the image
 * @returns the view which shows the image uploaded and the link to the image
 */
const ImageUploaded = function (props) {
  // Controls the visibility of the alert confirming the copying of the link to the clipboaed
  const [showAlert, setShowAlert] = useState('none');

  /**
   * Copys the link of the uploaded image to the clipboard
   * @returns {undefined}
   */
  const copyTextToClipboard = function () {
    if (!props.uploadedImage) return;

    // Copies the image link to the clipboard
    navigator.clipboard.writeText(props.uploadedImage);

    // Displays the alert that confirms the copying of the image link to the clipboard
    setShowAlert(() => 'flex');

    // Removes the alert that confirms the copying of the image link to the clipboard after 3 seconds
    setTimeout(() => setShowAlert(() => 'none'), 3000);
  };

  return (
    <Paper className='centered' id='firstPaper'>
      <Alert severity='success' sx={{ display: showAlert }}>
        Text copied to clipboard
      </Alert>
      <CheckCircleIcon fontSize='large' sx={{ color: 'green' }} />
      <Typography className='text' variant='subtitle1'>
        Uploaded Sucessfully
      </Typography>
      <Box
        component='img'
        width='100%'
        height='50%'
        sx={{ marginTop: '30px' }}
        src={props.uploadedImage}
      ></Box>
      <Container sx={{ display: 'flex', paddingTop: '30px' }}>
        <TextField
          className='textField'
          disabled={true}
          fullWidth
          value={props.uploadedImage}
        />
        <Button className='button' onClick={copyTextToClipboard}>
          Copy
        </Button>
      </Container>
    </Paper>
  );
};

export default ImageUploaded;
