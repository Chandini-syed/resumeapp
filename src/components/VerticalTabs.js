
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonalInfo from './PersonalInfo'
import EduDetails from './EduDetails'
import WorkExp from './WorkExp'
import Experience from './Experience'
import StartYear from "./StartYear"
import EndYear from "./EndYear"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Personal Info" {...a11yProps(0)} />
        <Tab label="Work Experience" {...a11yProps(1)} />
        <Tab label="Education" {...a11yProps(2)} />
        <Tab label="Key Skills" {...a11yProps(3)} />
       
      </Tabs>
      <TabPanel value={value} index={0}>
        <PersonalInfo/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Experience/>
      <WorkExp/>
      <div class="row"><StartYear/>
      <EndYear/></div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <EduDetails/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Key Skills
      </TabPanel>
      
    </Box>
  );
}
