import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Text,
  } from '@chakra-ui/react'


function RegisterDraw() {
    const Button1 = {
        backgroundColor:'#ff7555', color:'#FFFFFF', padding:'10px 20px', borderRadius:'20px',
    }


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} style={Button1}  onClick={onOpen}>
          Register
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Register</DrawerHeader>
  
            <DrawerBody>
            <Text color='#091E42' fontSize='13px' fontWeight='600' >Full Name</Text>
              <Input mb='25px' placeholder='What is your name?' />

              <Text color='#091E42' fontSize='13px' fontWeight='600' >Email ID </Text>
              <Input placeholder='Tell us your Email ID' />

              <Text mb='25px' color='#445578' fontSize='13px'  >We'll send you relevant jobs in your mail</Text>

              <Text color='#091E42' fontSize='13px' fontWeight='600' >Password</Text>
              <Input placeholder='Create a password for your account' />
              <Text mb='25px' color='#445578' fontSize='13px' >Minimum 6 characters required</Text>

              <Text color='#091E42' fontSize='13px' fontWeight='600' >Mobile Number</Text>
              <Input type='number' placeholder='Mobile Number' />
              <Text mb='25px' color='#445578' fontSize='13px' >Recruiters will call you on this number</Text>

              <Text color='#091E42' fontSize='13px' fontWeight='600' >Resume</Text>
              <Input type='file' />
              <Text color='#445578' fontSize='13px' >Recruiters will call you on this number</Text>

              
            
            <Button color='#FFFFFF' bg='#FF7555' w='100%' mt='25px' colorScheme='blue'>Register Now</Button>
            <Text mt='25px' fontWeight='600' color='#445578' fontSize='13px' >Already Registered</Text>

            <Link to='/jobs'><Button w='110px' colorScheme='blue'>Login</Button></Link>
            
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default RegisterDraw;