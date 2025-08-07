import { Center, Heading, Flex, Text, Button, Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
const axios = require('axios')
const Student =()=>{
    const [menuItems, setMenuItems] = useState<string[]>([])
    const [activeItems, setActiveItems] = useState<String>('Main Course')
    
  const fetch= async()=>{
const data = await axios.get('/api/menu')
    console.log(data.data)
    // const names= data?.data
    // setMenuItems(data.data)
    setMenuItems(data.data.map((item: { name: string }) => item.name));
  }
  useEffect(()=>{
    fetch()
  },[])
    return(
        <>
        <div style={{
            width: "100%",
            height: "60px",
            backgroundColor: "#ffffff",
            border: "1px solid #ccc",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.5)",
            fontSize: "20px",
            textAlign: "center",
            lineHeight: "150px",
            fontWeight: "bold"
        }} ></div>

        
        <Flex  bg="white" justify="space-around" align="center" marginTop="20px">
        {/* {menuItems.map((item, index) => (
            <Text
            key={index}
            fontWeight={item.active ? "bold" : "normal"}
            color={item.active ? "green.500" : "gray.400"}
            fontSize="md"
            cursor="pointer"
            whiteSpace="nowrap"
            onClick={
                ()=>{
                    item.active = true;
                    console.log(item)
                }
            }
            >
            {item.label}
            </Text>

        ))} */}
        {
            menuItems.map((item, index) => (
            <Box
            py={3} px={4} 
            key={index}
            fontWeight="bold"
            width= "100%"
            textAlign="center"
            color={item == activeItems ? "white" : "grey.400"}
            fontSize="md"
            cursor="pointer"
            whiteSpace="nowrap"
            background={item === activeItems ? "#24c139" : "white"}

            onClick={()=>{setActiveItems(item)}}
            >
            {item}
            </Box>
        ))
        }
    </Flex>
        </>
    )
}
export default Student;