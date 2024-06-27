import React from 'react';
import { Box, AbsoluteCenter } from '@chakra-ui/react';

function NoCourse() {
  return (
    <Box position="relative">
      <AbsoluteCenter axis="both">No Course Found</AbsoluteCenter>
    </Box>
  );
}

export default NoCourse;
