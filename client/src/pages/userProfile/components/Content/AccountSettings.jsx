import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react';
import Actions from './Actions.jsx';

function AccountSettings({ userData }) {
  const { fullName, email } = userData;
  return (
    <>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}>
        <FormControl id="firstName">
          <FormLabel>Name</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder=""
            name="fullName"
            defaultValue={fullName}
          />
        </FormControl>

        <FormControl id="phoneNumber">
          <FormLabel>Phone Number</FormLabel>
          <Input focusBorderColor="brand.blue" type="tel" placeholder="" />
        </FormControl>
        <FormControl id="emailAddress">
          <FormLabel>Email Address</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="email"
            placeholder=""
            name="email"
            defaultValue={email}
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
        <FormControl id="city">
          <FormLabel>City</FormLabel>
          <Select focusBorderColor="brand.blue" placeholder="Select city">
            <option value="brampton">Brampton</option>
            <option value="washington">Washington</option>
            <option value="whitby">Whitby</option>
            <option value="toronto">Toronto</option>
            <option value="london">London</option>
            <option value="ajax">Ajax</option>
            <option value="kitchener">Kitchener</option>
          </Select>
        </FormControl>
        <FormControl id="country">
          <FormLabel>Country</FormLabel>
          <Select focusBorderColor="brand.blue" placeholder="Select country">
            <option value="canada">Canada</option>
            <option value="england">England</option>
            <option value="usa">USA</option>
          </Select>
        </FormControl>
      </Grid>
      <Actions submitHandler={() => {}} />
    </>
  );
}

export default AccountSettings;
