import { Box, Button } from "@chakra-ui/react";

function Actions({ submitHandler }) {
  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button onClick={(e) => submitHandler(e)}>Update</Button>
    </Box>
  );
}

export default Actions;
