import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  CircularProgress,
  Alert,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { careerService } from '../services/api';

// 基础职业路径数据
const careerPaths = [
  {
    id: 'smart-contract-developer',
    title: 'Smart Contract Developer',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    description: 'Develop and audit smart contracts for DeFi and NFT platforms',
  },
  {
    id: 'blockchain-architect',
    title: 'Blockchain Architect',
    icon: <ArchitectureIcon sx={{ fontSize: 40 }} />,
    description: 'Design and implement blockchain solutions and infrastructure',
  },
  {
    id: 'security-engineer',
    title: 'Web3 Security Engineer',
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    description: 'Audit smart contracts and ensure protocol security',
  },
];

const LearningPath = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [careerInfo, setCareerInfo] = useState(null);

  const handlePathClick = async (path) => {
    setSelectedPath(path);
    setDialogOpen(true);
    setLoading(true);
    setError(null);
    setActiveStep(0);

    try {
      const info = await careerService.getCareerInfo(path.id);
      setCareerInfo(info);
    } catch (err) {
      setError('Failed to load career information. Please try again later.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setDialogOpen(false);
    setCareerInfo(null);
    setError(null);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Learning Paths
      </Typography>

      {/* Career Paths Grid */}
      <Grid container spacing={3}>
        {careerPaths.map((path) => (
          <Grid item xs={12} sm={6} md={4} key={path.id}>
            <Card 
              sx={{ 
                height: '100%',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}
              onClick={() => handlePathClick(path)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  {path.icon}
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {path.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {path.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Learning Path Dialog */}
      <Dialog 
        open={dialogOpen} 
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {selectedPath?.icon}
            <Typography variant="h6">
              {selectedPath?.title} Learning Path
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          {careerInfo && !loading && !error && (
            <>
              {/* Background Knowledge */}
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Background Knowledge
              </Typography>
              {careerInfo.background.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="primary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.content}
                  </Typography>
                </Box>
              ))}

              {/* Learning Steps */}
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Learning Steps
              </Typography>
              <Stepper activeStep={activeStep} orientation="vertical">
                {careerInfo.learningPath.map((step, index) => (
                  <Step key={index}>
                    <StepLabel>{step.label}</StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" color="primary">
                          Recommended Resources:
                        </Typography>
                        {step.resources.map((resource, i) => (
                          <Button
                            key={i}
                            variant="text"
                            href={resource.url}
                            target="_blank"
                            sx={{ display: 'block', textAlign: 'left' }}
                          >
                            {resource.name}
                          </Button>
                        ))}
                      </Box>
                      <Box sx={{ mb: 2, mt: 1 }}>
                        <Button
                          variant="contained"
                          onClick={() => setActiveStep(index + 1)}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === careerInfo.learningPath.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        <Button
                          onClick={() => setActiveStep(index - 1)}
                          sx={{ mt: 1, mr: 1 }}
                          disabled={index === 0}
                        >
                          Back
                        </Button>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default LearningPath;