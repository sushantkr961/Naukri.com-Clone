import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar2 from "../Components/Jobs/Navbar2";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Components/Context/UserAuthContext";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useUserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password);
      navigate("/login")
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Box w="70%" margin="auto">
      <Navbar2 />
      
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        // border='1px solid red'
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Register
            </Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text> */}
          </Stack>
          {error && <Alert variant="danger" bg='#ff9194' borderRadius='10px' color='#800000'>{ error }</Alert>}
          <form onSubmit={handleSubmit}>
          <Box
          // border='1px solid red'
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            
            <Stack spacing={4}>
              <HStack>
                {/* <Box>
                  <FormControl id="firstName" 
                  // isRequired
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box> */}
                {/* <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box> */}
              </HStack>
              <FormControl id="email" 
              // isRequired
              >
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" 
              // isRequired
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Register Now
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link to='/login' color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
          </form>
        </Stack>
      </Flex>
      
    </Box>
  );
}
