import React, { useEffect, useState } from 'react';
import { getData } from './Api';
import LoadingIndicator from './LoadingIndicator';
import JobsCard from './JobsCard';
import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import RegisterDraw from '../Drawer/RegisterDraw';
// import { AppContext } from "../Context/AppContext";

const Jobs = () => {
  // const authState = useContext(AppContext);

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = (page) => {
    setLoading(true);
    getData({page, limit:5}).then((res) => {
      console.log(res)
      setLoading(false);
      setResult(res.data)
    })
    .catch((error) => setLoading(false))
    .finally(() => console.log('call completed'))
  }


  useEffect(() => {
    fetchData(page);
  }, [page])


  return loading ? ( <LoadingIndicator />) : (
    <>
    <Flex>
    <Box w="50%" margin="auto"  mt='50px'>
      {
        result.map((ele) => (
          <JobsCard word={ele.title} name={ele.company_name} tags={ele.tags} local={ele.location} type={ele.job_types} />
        ))
      }
    </Box>
    <Box w='40%' boxShadow='lg' mt='50px' h='380px' mr='40px' borderRadius='16px 6px' border='1px solid #EAF1F5' p='10' >
      <Flex>
        <Box>
          <Text fontSize="20px" fontWeight="bold" mt='20px' mb='20px' >Get Personalised Job Recommendations</Text>
          <Text fontSize="17px" fontWeight="500" mt='20px'>Registering gives you the benefit to browse & apply variety of jobs based on your preferences</Text>
        </Box>
        <Img w='200px' h='200px' src='https://static.naukimg.com/s/7/109/assets/images/register.e0bc10df.png' mb='50px' />
      </Flex>
      {/* <Button color='white' backgroundColor='#ff7555' display='flex' margin='auto' >Register Now</Button> */}
      <RegisterDraw />
      <Box w='117%' boxShadow='lg' mt='100px' h='500px' ml='-40px' mr='40px' borderRadius='16px 6px' border='1px solid #EAF1F5' p='8'>
        <Text fontSize="23px" fontWeight="bold" mt='20px' mb='20px' textAlign='center'>Partner Cpmpanies</Text>
      <Flex>
        <Box>
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/64499.gif' />
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/756067.gif' />
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/2064404.gif' />
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/5953034.gif' />
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/25773.gif' />
        </Box>
        <Box>
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/12386.gif' />
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/217.gif' />
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/2195080.gif' />
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/2710958.gif' />
          <Img m='10px' w='180px' h='60px' src='https://img.naukimg.com/fc_images/v2/677.gif' />
        </Box>
      </Flex>
    </Box>
    </Box>
    </Flex>
    <Box margin='auto' w='300px' mt='25px' >
        <Button border='3px solid #457EFF' color='black' fontWeight='bold' mr='20px' disabled={page === 1} onClick={() => setPage(page - 1)}>PREV</Button>
        <Button border='3px solid #457EFF' color='black' fontWeight='bold'>{page}</Button>
        <Button border='3px solid #457EFF' color='black' fontWeight='bold' ml='20px' onClick={() => setPage(page + 1)}>NEXT</Button>
    </Box>
    </>
  )
}

export default Jobs;