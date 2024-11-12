import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Paper
} from '@mui/material';
import LearningPath from '../components/LearningPath';

const CareerOverview = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const TabPanel = ({ children, value, index }) => (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Paper elevation={0} sx={{ bgcolor: 'primary.main', color: 'white', p: 4, mb: 4, borderRadius: 2 }}>
        <Typography variant="h3" gutterBottom>
          Web3 Career Guide
        </Typography>
        <Typography variant="h6">
          Your pathway to becoming a Web3 professional
        </Typography>
      </Paper>

      {/* Tabs */}
      <Tabs value={selectedTab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Learning Paths" />
        <Tab label="Job Market" />
      </Tabs>

      {/* Content */}
      <TabPanel value={selectedTab} index={0}>
        <LearningPath />
      </TabPanel>

      <TabPanel value={selectedTab} index={1}>
        <Typography variant="h5">
          Job Market Information (Coming Soon)
        </Typography>
      </TabPanel>
    </Container>
  );
};

export default CareerOverview; 