import { FormControl, FormLabel, Grid, Input } from '@chakra-ui/react';
import ButtonComp from '../../Components/Button';
import { FormComp, useFormHook } from '../../Components/Form';

import type { userDataProps } from '../../../../shared.types';
import { useEffect } from 'react';

type AccountSettingsProps = {
  userData: userDataProps;
};

type FormHookProps = {
  fullName: string;
  email: string;
  phoneNumber?: string;
};

const initialvalue: FormHookProps = {
  fullName: '',
  email: '',
  phoneNumber: '',
};

function AccountSettings({ userData }: AccountSettingsProps) {
  const { formDataState, handleFormChange, setFormData } =
    useFormHook<FormHookProps>(initialvalue);

  useEffect(() => {
    const { fullName, email } = userData;
    setFormData({ fullName, email });
  }, []);

  const onFormSubmit = (isValid: boolean) => {
    console.log('formDa :>> ', formDataState, isValid);
    if (!isValid) {
      console.log('show error :>> ');
    }

    // const decryptedCartIteamIds = getDecryptedGuestCartData();
    // dispatch(loginAction({ ...formDataState, decryptedCartIteamIds }));
  };

  return (
    <>
      <FormComp onFormSubmit={onFormSubmit}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={6}>
          <FormControl id="firstName" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder=""
              name="fullName"
              value={formDataState.fullName}
              onChange={handleFormChange}
              //   defaultValue={fullName}
            />
          </FormControl>

          <FormControl id="phoneNumber">
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              placeholder=""
              // value={formDataState?.phoneNumber || 132}
              // onChange={handleFormChange}
            />
          </FormControl>
          <FormControl id="emailAddress" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder=""
              name="email"
              value={formDataState.email}
              onChange={handleFormChange}
              //   defaultValue={email}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="********" autoComplete="on" />
          </FormControl>
        </Grid>
        <ButtonComp type="submit" />
      </FormComp>
    </>
  );
}

export default AccountSettings;
