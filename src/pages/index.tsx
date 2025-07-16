import { Box, Flex, Heading, Text, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import CircularTextSVG from "../../components/icons/circularText";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  function handleRegister(){
    router.push('/Registration/Stepone')
  }
  function handleLogin(){
    router.push('/Login')
  }
  return (
    <Box margin={40}>
      <Center>
        <Box>
          <Heading>
            Welcome to food Ordering App
          </Heading>
          
          <Center>
            <CircularTextSVG />
          </Center>
          <Center>
            <Box>
              <Button onClick={handleLogin}>Login</Button>
              <Button onClick={handleRegister}>Register</Button>
            </Box>
          </Center>

        </Box>

      </Center>
    </Box>
  );
}
