import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';
import DreamJob from '../Components/DreamJob';
import Grid from '../Components/Grid';
import Carousel from '../Components/Carousel/Carousel';
import Hiring from '../Components/Hiring/Hiring';
import Discover from '../Components/Discover/Discover';
import Sponsored from '../Components/Sponsored/Sponsored';
import Interview from '../Components/Interview/Interview';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
    <Box w="70%" margin="auto" 
    // border="1px solid"
    >
        <Navbar />
        <DreamJob />
        <Grid />
        <Carousel />
        <Hiring />
        <Discover />
        <Sponsored />
        <Interview />
    </Box>
    <Footer />
    </>

  );
};

export default Home;