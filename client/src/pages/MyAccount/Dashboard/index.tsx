import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { useMemo } from 'react';

import AddCourse from './AddCourse';
import PublishedCourses from './PublishedCourses';
import MyCourses from './MyCourses';
import type { UserDataProps } from '../../../shared.types';

type DashboardProps = {
  userData: UserDataProps;
};

type TabPanelProps = {
  title: string;
  panel: React.ComponentType<{ userData: UserDataProps }>;
};

const instructorPanels: TabPanelProps[] = [
  {
    title: 'Add Course',
    panel: AddCourse,
  },
  {
    title: 'Published Courses',
    panel: PublishedCourses,
  },
];

const studentPanels: TabPanelProps[] = [
  {
    title: 'My Courses',
    panel: MyCourses,
  },
];

const Dashboard = ({ userData }: DashboardProps) => {
  const tabs: TabPanelProps[] = [];

  if (userData?.userType === 'instructor') {
    tabs.push(...instructorPanels);
  }
  tabs.push(...studentPanels);

  const memoizedTabs = useMemo(() => tabs, [userData]);

  return (
    <Box
      as="section"
      flex={3}
      pt={5}
      bg={useColorModeValue('gray.100', 'brand.700')}
      height={'82vh'}
      rounded="md">
      <Tabs isLazy display={'flex'} height={'100%'} flexDirection={'column'}>
        <TabList>
          {memoizedTabs.map((tab) => (
            <Tab key={tab.title} fontWeight="semibold">
              {tab.title}
            </Tab>
          ))}
        </TabList>

        <TabPanels
          overflowY={'auto'}
          sx={{
            WebkitMask: 'linear-gradient(180deg, white 97%, transparent)',
            mask: 'linear-gradient(180deg, white 97%, transparent)',
          }}>
          {memoizedTabs.map((tab) => {
            const PanelComp = tab.panel;
            return (
              <TabPanel key={tab.title}>
                <PanelComp userData={userData} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
