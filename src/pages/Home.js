import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  Paper 
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const careerHighlights = [
    {
      title: "Average Salary",
      value: "$120,000",
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      description: "Annual salary range for Web3 developers"
    },
    {
      title: "Key Skills",
      value: "Solidity, Smart Contracts",
      icon: <CodeIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      description: "Most in-demand technical skills"
    },
    {
      title: "Job Opportunities",
      value: "10,000+",
      icon: <WorkIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      description: "Open positions worldwide"
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Paper 
        elevation={0}
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 4
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Start Your Web3 Career
              </Typography>
              <Typography variant="h5" paragraph>
                Discover opportunities in blockchain, DeFi, and cryptocurrency development
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                color="secondary"
                onClick={() => navigate('/overview')}
                sx={{ mt: 2 }}
              >
                Explore Careers
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Career Highlights */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Grid container spacing={4}>
          {careerHighlights.map((highlight, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    {highlight.icon}
                    <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
                      {highlight.title}
                    </Typography>
                    <Typography variant="h4" color="primary" sx={{ my: 2 }}>
                      {highlight.value}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {highlight.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Latest Trends Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Latest Web3 Trends
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Most Demanded Skills
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>Solidity Development</li>
                  <li>Smart Contract Security</li>
                  <li>DeFi Protocol Development</li>
                  <li>Web3.js / Ethers.js</li>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Top Companies Hiring
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>Coinbase</li>
                  <li>Binance</li>
                  <li>ConsenSys</li>
                  <li>OpenSea</li>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 