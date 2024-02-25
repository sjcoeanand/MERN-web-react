import React, {useState} from 'react'
import {VStack,FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
export const Signup = () => {
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [show , setShow] = useState(false);
  const [show1 , setShow1] = useState(false);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [profilePic, setProfilePic] = useState();

  const toggleShowHide = () => setShow(!show)
  const toggleShowHide1 = () => setShow1(!show1)
  const postPicture = (pics) => {}

  return (
      <VStack spacing={4} >
        <FormControl id='name' isRequired>
          <FormLabel>Display Name</FormLabel>
          <Input type='text' placeholder='Enter Your Name' variant='filled'  onChange={(e)=> setName(e.target.value)} size='sm'/>
        </FormControl>
        <FormControl id='email' isRequired>
          <FormLabel>Email Id</FormLabel>
          <Input type='text' placeholder='Enter Valid Email Id' variant='filled'  onChange={(e)=> setEmail(e.target.value)} size='sm'/>
        </FormControl>
        <FormControl id='password' isRequired>
          <FormLabel>New Password</FormLabel>
          <InputGroup>
            <Input type={show ? 'text' : 'password'} placeholder='Enter Password' variant='filled' onChange={(e)=> setPassword(e.target.value)} size='sm'/>
            <InputRightElement >
              <Button colorScheme='teal' variant='outline' size='xs' mb='2' mr='1' onClick={toggleShowHide}>{show ? 'Hide' : 'Show'}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id='confrimPassword' isRequired>
          <FormLabel>Confirm New Password</FormLabel>
          <InputGroup>
            <Input type={show1 ? 'text' : 'password'}  placeholder='Enter Password' variant='filled'  onChange={(e)=> setConfirmPassword(e.target.value)} size='sm'/>
            <InputRightElement >
              <Button colorScheme='teal' variant='outline' size='xs' mb='2' mr='1' onClick={toggleShowHide1}>{show1 ? 'Hide' : 'Show'}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id='profilePic' >
          <FormLabel>Upload Profile Picture</FormLabel>
          <Input type='file' accept='image/*' variant='filled'  onChange={(e)=> postPicture(e.target.files[0])} size='sm'/>
        </FormControl>

        <Button w='100%'  colorScheme='teal'>Sign Up</Button>
      </VStack>
  )
}
