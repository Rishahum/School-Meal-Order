import { Box, Flex, Heading, Text, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import CircularTextSVG from "../../components/icons/circularText";
export default function Home() {
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
              <Button >Login</Button>
              <Button >Register</Button>
            </Box>
          </Center>

        </Box>

      </Center>
    </Box>
  );
}
