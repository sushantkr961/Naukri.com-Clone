import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
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
import { Link } from 'react-router-dom'


function LoginDraw() {
    const Button2 = {
        borderRadius:'20px', color:'#457EFF', padding:'10px 20px', border:'1px solid #457EFF',backgroundColor:'#FFFFFF'
    }


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} style={Button2}  onClick={onOpen}>
          Login
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
            <DrawerHeader color='#091E42' fontSize='20px'>Login</DrawerHeader>
  
            <DrawerBody>
              <Text color='#091E42' fontSize='12px' >Email ID / Username</Text>
              <Input mb='25px' placeholder='Enter your Email ID / Username' />

              <Text color='#091E42' fontSize='12px'>Password</Text>
              <Input placeholder='Enter your password' />
              
              <Text fontSize='11px' textAlign='right' color='#551A8B'>Forgot Password?</Text>

              <Button m='30px 0px 11px' p='8px 16px' bg='#4A90E2' color='#FFFFFF' fontWeight='500' fontSize='14px' w='100%'>Login</Button>

              <Text cursor='pointer' fontSize='14px' color='#4A90E2' textAlign='center' mt='10px' mb='30px'>Use OTP to Login</Text>

              <hr />

              <Button mt='20px' boxShadow='lg' fontSize='14px' borderRadius='20px' w='100%' color='#757575' bg='#FFFFFF'> Sign in with Google</Button>

              <Link to='/register'><Text m='30px 0px 11px' p='8px 16px' bg='#FF7555' color='#FFFFFF' fontWeight='500' fontSize='14px' w='100%' textAlign='center' borderRadius='5px' cursor='pointer' >Register for free</Text></Link>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default LoginDraw;