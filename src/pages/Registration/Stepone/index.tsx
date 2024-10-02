import React, { useEffect, useState } from 'react'
import { Center } from "@chakra-ui/react";
import { Box, Input, InputRightElement, Button, InputGroup, Heading, Text, Flex } from "@chakra-ui/react";
import axios from 'axios';
import { useRouter } from "next/navigation";
const index = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const router = useRouter();
  function handleRoute() {
    router.push('/Registration/Stepone')
  }
  const [name, setName]=useState('');
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
 async function addInformation(){
  try{
    const data = await axios.post('/api/registration',{
      name: name,
      email: email,
      password: password,
      cpassword: cpassword,
  })
  console.log(data);
  }catch(error){
    console.log(error);
  }

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
          <Input bg={'white'} placeholder='Enter Student Name' size='md' marginBottom={'12px'} 
          onChange={(e)=>{setName(e.target.value)}}/>
          <Input bg={'white'} placeholder='mail id' size='md' marginBottom={'12px'} 
          type={'email'}
          onChange={(e)=>{setEmail(e.target.value)}}/>

          <InputGroup size='md' marginBottom={3}>
            <Input
              bg={'white'}
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={(e)=>{setPassword(e.target.value)}}
            />

            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
            
          </InputGroup>

          <InputGroup size='md'>
            <Input
              bg={'white'}
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Confirm password'
              onChange={(e)=>{setCpassword(e.target.value)}}
            />

            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
            
          </InputGroup>
          <Center margin={'15px'}>
            <Button onClick={addInformation}>
              Login
            </Button>
          </Center>

        </Box>
       
      </Box>
    </Center>
  )
}

export default index