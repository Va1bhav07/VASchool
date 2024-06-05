import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import AccountSettings from "./AccountSettings.jsx";
import CompanySettings from "./CompanySettings.jsx";
import Notifications from "./Notifications.jsx";
import AddCourse from "./AddCourse.jsx";
import PublishedCourses from "./PublishedCourses.jsx";
import { useState } from "react";

const Content = ({ userData }) => {
  const tabs = ["Account Settings"];
  const [tabIndexState, setTabIndex] = useState(0);

  console.log("userData :>> ", userData);

  if (userData?.userType === "instructor") {
    tabs.push("Add Course", "Published Courses");
  }

  const handleTabChange = (tab, a) => {
    setTabIndex(tab);
  };

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: "translateY(-100px)" }}
    >
      <Tabs onChange={handleTabChange}>
        <TabList px={5}>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: "transparent" }}
              _selected={{ color: "brand.dark", borderColor: "brand.blue" }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <AccountSettings userData={userData} />
          </TabPanel>
          <TabPanel>
            <AddCourse userData={userData} />
          </TabPanel>
          <TabPanel>
            <PublishedCourses
              userData={userData}
              tabIndexState={tabIndexState}
            />
          </TabPanel>
          {/* <TabPanel>
            <Notifications />
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Content;
