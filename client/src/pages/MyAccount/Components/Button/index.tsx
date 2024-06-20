import { Box, Button } from '@chakra-ui/react';

type ButtonCompProps = {
  isLoading?: boolean;
  loadingText?: string;
  colorScheme?: string;
  text?: string;
  [key: string]: unknown;
};

function ButtonComp({
  isLoading = false,
  loadingText = 'saving',
  colorScheme = 'green',
  text = 'Save',
  ...props
}: ButtonCompProps) {
  return (
    <Box mt={3} py={5} px={8} borderColor="brand.light" textAlign={'end'}>
      <Button
        isLoading={isLoading}
        loadingText={loadingText}
        colorScheme={colorScheme}
        w={{ base: 'full', md: '60' }}
        {...props}>
        {text}
      </Button>
    </Box>
  );
}

export default ButtonComp;
