import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

// import AccountSettings from './AccountSetting';
import AddCourse from './AddCourse';
import type { userDataProps } from '../../../shared.types';

type DashboardProps = {
  userData: userDataProps;
};

const Dashboard = ({ userData }: DashboardProps) => {
  const tabs = [];

  if (userData?.userType === 'instructor') {
    tabs.push('Add Course', 'Published Courses');
  }

  return (
    <Box
      as="main"
      flex={3}
      pt={5}
      bg={useColorModeValue('gray.100', 'brand.700')}
      rounded="md">
      <Tabs isLazy>
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab} fontWeight="semibold">
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {/* <TabPanel>
            <AccountSettings userData={userData} />
          </TabPanel> */}
          <TabPanel>
            <AddCourse userData={userData} />
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
