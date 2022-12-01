import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Components/Context/UserAuthContext";
import Navbar2 from "../Components/Jobs/Navbar2";
import GoogleButton from "react-google-button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      console.log(email)
      navigate("/profile");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/profile");
      console.log("hello")
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <Box w="70%" margin="auto">
      <Navbar2 />
      <Flex
        minH={"90vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Login to your account</Heading>
          </Stack>
          {error && <Alert variant="danger" bg='#ff9194' borderRadius='10px' color='#800000'>{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>

                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    Login
                  </Button>

                    <GoogleButton onClick={handleGoogleSignIn} />
                  

                  <Text align={"center"}>
                    Don't have a account?{" "}
                    <Link to="/register">Register Now</Link>
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
