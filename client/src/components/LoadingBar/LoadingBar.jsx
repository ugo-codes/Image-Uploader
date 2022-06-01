import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/**
 * This method returns a view of a loadin bar in progress
 * @returns {View} returns a view of a loadin bar in progress
 */
const LoadingBar = function () {
  return (
    <Paper className="centered" id="linearProgressDiv">
      <Typography className="text" variant="subtitle1">
        Uploading...
      </Typography>

      <LinearProgress className="linearProgress" />
    </Paper>
  );
};

export default LoadingBar;
