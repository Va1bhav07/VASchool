// import { useState } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

// import AccountSettings from './AccountSetting';
import AddCourse from './AddCourse';
import PublishedCourses from './PublishedCourses';
import type { UserDataProps } from '../../../shared.types';

type DashboardProps = {
  userData: UserDataProps;
};

const Dashboard = ({ userData }: DashboardProps) => {
  const tabs = [];
  // const [tabIndexState, setTabIndex] = useState(0);

  // const handleTabChange = (tab: number) => {
  //   setTabIndex(tab);
  // };

  if (userData?.userType === 'instructor') {
    tabs.push('Add Course', 'Published Courses');
  }

  return (
    <Box
      as="section"
      flex={3}
      pt={5}
      bg={useColorModeValue('gray.100', 'brand.700')}
      height={'82vh'}
      rounded="md">
      <Tabs
        isLazy
        // onChange={handleTabChange}
        display={'flex'}
        height={'100%'}
        flexDirection={'column'}>
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab} fontWeight="semibold">
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels
          overflowY={'auto'}
          sx={{
            WebkitMask: 'linear-gradient(180deg, white 97%, transparent)',
            mask: 'linear-gradient(180deg, white 97%, transparent)',
          }}>
          {/* <TabPanel>
           <AccountSettings userData={userData} /> 
          </TabPanel>*/}
          <TabPanel>
            <AddCourse userData={userData} />
          </TabPanel>
          <TabPanel>
            <PublishedCourses
              userData={userData}
              // tabIndexState={tabIndexState}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
