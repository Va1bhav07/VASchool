import { Box, Button } from '@chakra-ui/react';

type ButtonCompProps = {
  isLoading?: boolean;
  loadingText?: string;
  colorScheme?: string;
  [key: string]: unknown;
};

function ButtonComp({
  isLoading = false,
  loadingText = 'saving',
  colorScheme = 'teal',
  ...props
}: ButtonCompProps) {
  return (
    <Box mt={3} py={5} px={8} borderColor="brand.light" textAlign={'end'}>
      <Button
        isLoading={isLoading}
        loadingText={loadingText}
        colorScheme={colorScheme}
        {...props}>
        Save
      </Button>
    </Box>
  );
}

export default ButtonComp;
