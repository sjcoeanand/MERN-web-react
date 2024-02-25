import React, {useState} from 'react'
import {VStack,FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

export const Login = () => {
  
  const [email , setEmail] = useState()
  const [show , setShow] = useState()
  const [password , setPassword] = useState()
  const togglePassword = () => setShow(!show)

  return (
    <VStack spacing={4}  >
        <FormControl id='email' isRequired>
          <FormLabel>Email Id</FormLabel>
          <Input type='text' variant='filled'  placeholder='Enter Email Id'  onChange={(e)=> setEmail(e.target.value)} size='sm'/>
        </FormControl>
        <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={show ? 'text' : 'password'} variant='filled' placeholder='Enter Password'  onChange={(e)=> setPassword(e.target.value)} size='sm'/>
            <InputRightElement>
              <Button  colorScheme='teal' variant='outline' size='xs' mb='2' mr='1' onClick={togglePassword}>{show ? 'Hide' : 'Show'}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button w='100%'  colorScheme='teal'>Login</Button>
      </VStack>
  )
}
