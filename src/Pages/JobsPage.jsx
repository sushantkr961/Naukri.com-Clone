import { Box } from '@chakra-ui/react';
import React from 'react';
import Jobs from '../Components/Jobs/Jobs';
import Navbar2 from '../Components/Jobs/Navbar2';
import Carousel from '../Components/Carousel/Carousel'
import Footer from '../Footer';

const JobsPage = () => {
  return (
    <>
    <Box w="70%" margin="auto">
        <Navbar2 />
        <Carousel />
        <Jobs />
    </Box>
    <Footer />
    </>
  )
}

export default JobsPage;