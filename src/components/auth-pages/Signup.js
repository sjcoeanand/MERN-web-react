import React, {useState} from 'react'
import {VStack,FormControl, FormLabel, Input, InputGroup, InputRightElement, Button , useToast} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [show , setShow] = useState(false);
  const [show1 , setShow1] = useState(false);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [profilePic, setProfilePic] = useState();
  const [loading, setLoading] = useState(false)
  const toast = useToast();
  const toggleShowHide = () => setShow(!show)
  const toggleShowHide1 = () => setShow1(!show1)
  const postPicture = (pics) => {}
  const navigate = useNavigate()

  const submitForm = async () => {
    // setLoading(true);
    if(!name || !email || !password || !confirmPassword){
      toast({
        title : "Please fill all the fields",
        status : 'warning',
        duration : 5000,
        isClosable : true,
        position : "bottom-right"
      })
      return
    }
    if( password !== confirmPassword){
      toast({
        title : "Password and confirm password does not match",
        status : 'warning',
        duration : 5000,
        isClosable : true,
        position : "bottom-right"
      })
      return
    }

    try{
      const config = {
        headers : {
          "Content-type" : "application/json"
        }
      }
      const {data} = await axios.post("/app/user", {name, email, password, profilePic}, config)
      toast({
        title : "Registration Successful",
        status : 'success',
        duration : 5000,
        isClosable : true,
        position : "bottom-right"
      })
      localStorage.setItem("userInfo", JSON.stringify(data))
      setLoading(false);
      navigate('/chats')
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  return (
      <VStack spacing={4} >
        <FormControl id='namesgp' isRequired>
          <FormLabel>Display Name</FormLabel>
          <Input type='text' placeholder='Enter Your Name' variant='filled'  onChange={(e)=> setName(e.target.value)} size='sm'/>
        </FormControl>
        <FormControl id='emailsgp' isRequired>
          <FormLabel>Email Id</FormLabel>
          <Input type='text' placeholder='Enter Valid Email Id' variant='filled'  onChange={(e)=> setEmail(e.target.value)} size='sm'/>
        </FormControl>
        <FormControl id='passwordsgp' isRequired>
          <FormLabel>New Password</FormLabel>
          <InputGroup>
            <Input type={show ? 'text' : 'password'} placeholder='Enter Password' variant='filled' onChange={(e)=> setPassword(e.target.value)} size='sm'/>
            <InputRightElement >
              <Button colorScheme='teal' variant='outline' size='xs' mb='2' mr='1' onClick={toggleShowHide}>{show ? 'Hide' : 'Show'}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id='confrimPasswordsgp' isRequired>
          <FormLabel>Confirm New Password</FormLabel>
          <InputGroup>
            <Input type={show1 ? 'text' : 'password'}  placeholder='Enter Password' variant='filled'  onChange={(e)=> setConfirmPassword(e.target.value)} size='sm'/>
            <InputRightElement >
              <Button colorScheme='teal' variant='outline' size='xs' mb='2' mr='1' onClick={toggleShowHide1}>{show1 ? 'Hide' : 'Show'}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id='profilePicsgp' >
          <FormLabel>Upload Profile Picture</FormLabel>
          <Input type='file' accept='image/*' variant='filled'  onChange={(e)=> postPicture(e.target.files[0])} size='sm'/>
        </FormControl>

        <Button w='100%' isLoading={loading} onClick={submitForm} colorScheme='teal'>Sign Up</Button>
      </VStack>
  )
}
