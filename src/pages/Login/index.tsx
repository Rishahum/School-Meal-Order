import { Center } from "@chakra-ui/react";
import { Box, Input, InputRightElement, Button, InputGroup, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
const Login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const router = useRouter();
  function handleRoute() {
    router.push('/Registration/Stepone')
  }
  return (
    <Center height={'100vh'}>
      <Box>
        <Box
          bg="rgba(255, 255, 255, 0.2)" // Semi-transparent background
          backdropFilter="blur(10px)" // Blur background effect
          boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)" // Optional: add shadow
          borderRadius="10px" // Rounded corners
          padding="16px" // Adjust padding
          width="60vw"
        >
          <Heading as='h4' size='md' marginBottom={'12px'}>
            LOGIN
          </Heading>
          <Input bg={'white'} placeholder='mail id' size='md' marginBottom={'12px'} />

          <InputGroup size='md'>
            <Input
              bg={'white'}
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Center margin={'15px'}>
            <Button >
              Login
            </Button>
          </Center>

        </Box>
        <Flex bg={"green.200"} borderRadius={'6px'} padding={'6px'}>
          Not Registered ?
          <Text color="red.300" marginLeft={'5px'} onClick={handleRoute}
            cursor={'pointer'}
          >Register</Text>
        </Flex>
      </Box>
    </Center>
  );
};

export default Login;
