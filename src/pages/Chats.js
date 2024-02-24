import React, { useEffect, useState } from 'react';
import { Card,CardHeader,  CardBody, Heading,Box,Text,Stack ,StackDivider,Avatar } from '@chakra-ui/react'
import axios from 'axios';

export const Chats = () => {

    const [chat, setChat] = useState([]);

    const fetchData = async () =>  {
        const {data} = await axios.get("/api/chats")    
        console.log("data", data);
        setChat(data);    
    }

    useEffect(()=>{
        fetchData()
    }, [])

  return  (
    <Card maxW='xs'>
        <CardHeader>
            <Heading size='md'>Chat List</Heading>
        </CardHeader>

        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            { chat.map((x)=>
            <Box >
                <Heading size='xs' textTransform='uppercase'>
                <Box display="flex" alignItems="center" >
                    <div><Avatar mr={2} size='xs' name={x.chatName} src='https://bit.ly/broken-link'  /> </div>
                    <div >{x.chatName}</div> 
                </Box>
                </Heading>
                <Text pt='2' fontSize='sm'>
                Sample Message
                </Text>
            </Box>
            )    
            }
            </Stack>
        </CardBody>
    </Card>    
  )
}


 
    
    // <div>
    //     {
    //     chat.map(x => <div key={x._id}>{x.chatName}</div>) 
    //     }
    // </div>