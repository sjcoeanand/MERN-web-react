import React from 'react'
import {Card, CardBody, Tabs, TabList, Tab, TabPanels, TabPanel, Container, Box} from '@chakra-ui/react'
import { Login } from '../components/auth-pages/Login'
import { Signup } from '../components/auth-pages/Signup'

export const Home = () => {
  return (
    <Container maxW='xl' mt="2.5rem" centerContent>
      <Box d="flex" w='100%'>
        <Card maxW='lg'>
          <CardBody>
          <Tabs isFitted variant='enclosed-colored' colorScheme='teal' >
            <TabList mb='1em'>
              <Tab>Login</Tab>
              <Tab>Signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                  <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
          </CardBody>
        </Card>
      </Box>
    </Container>
  )
}
