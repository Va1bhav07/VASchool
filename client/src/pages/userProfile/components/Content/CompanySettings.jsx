import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Button, // Import Button from Chakra UI
} from '@chakra-ui/react';

function CompanySettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="userid">
        <FormLabel>Username</FormLabel>
        <InputGroup>
          <InputLeftAddon color="gray.500">
            <svg width="1em" fill="currentColor" viewBox="0 0 20 20">
              {/* Your SVG path here */}
            </svg>
          </InputLeftAddon>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder="khan"
          />
        </InputGroup>
      </FormControl>
      <FormControl id="Name">
        <FormLabel>Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Sadab Khan" />
      </FormControl>
      <FormControl id="youremail">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="khan@conestogac.on.ca"
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder="********"
        />
      </FormControl>
      <FormControl id="phonenumber">
        <FormLabel>Phone Number</FormLabel>
        <InputGroup>
          {/* You can customize the input format based on your requirements */}
          <InputLeftAddon color="gray.500">+1</InputLeftAddon>
          <Input
            focusBorderColor="brand.blue"
            type="tel"
            placeholder="123-456-7890"
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Age</FormLabel>
        <NumberInput>
          <NumberInputField placeholder="23" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Button colorScheme="blue">Update Password and Phone Number</Button>
    </Grid>
  );
}

export default CompanySettings;
