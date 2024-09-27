"use client"
import React from 'react'

import { Grid, GridItem, Flex, Box, Tabs, TabList, Tab, Text,Button,useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import { FaPlusCircle } from 'react-icons/fa';
import Cards from './ui/cards'

export default function Dashboard() {
  const [isBetween200And840] = useMediaQuery("(min-width: 200px) and (max-width: 840px)");

  return (
    <div>
      <Text fontSize='3xl' fontWeight={'bold'} width={isBetween200And840 ? '310px' : ''}>Welcome Back, Haseena!</Text>
      <Text fontSize='xl' color='#707066' width={isBetween200And840 ? '310px' : ''}>You have accomplished a lot today. Let us handle the rest.</Text>
      <Grid templateColumns={isBetween200And840 ? 'repeat(1, 1fr)' : 'repeat(5, 1fr)'} gap={16} ml={2} mt={4}>

        <GridItem w='100%' h='auto'>
          <Flex alignItems="center">
            <Image
              src="/Completed.png"
              alt="Next.js logo"
              width={40}
              height={24.52}
              priority
            />
            <Box ml={2}>
              <Text fontSize="lg" fontWeight="bold">30</Text>
              <Text color="#707066" fontSize="small">Completed</Text>
            </Box>
          </Flex>
        </GridItem>

        <GridItem w='100%' h='auto'>
          <Flex alignItems="center">
            <Image
              src="/Ongoing.png"
              alt="Next.js logo"
              width={40}
              height={24.52}
              priority
            />
            <Box ml={2}>
              <Text fontSize="lg" fontWeight="bold">02</Text>
              <Text color="#707066" fontSize="small">Ongoing</Text>
            </Box>
          </Flex>
        </GridItem>

        <GridItem w='100%' h='auto'>
          <Flex alignItems="center">
            <Image
              src="/Drafts.png"
              alt="Next.js logo"
              width={40}
              height={24.52}
              priority
            />
            <Box ml={2}>
              <Text fontSize="lg" fontWeight="bold">04</Text>
              <Text color="#707066" fontSize="small">Drafts</Text>
            </Box>
          </Flex>
        </GridItem>

        <GridItem w='100%' h='auto'>
          <Flex alignItems="center">
            <Image
              src="/Cancelled.png"
              alt="Next.js logo"
              width={40}
              height={24.52}
              priority
            />
            <Box ml={2}>
              <Text fontSize="lg" fontWeight="bold">02</Text>
              <Text color="#707066" fontSize="small">Cancelled</Text>
            </Box>
          </Flex>
        </GridItem>



      </Grid>

      <Tabs size='sm' mt={8} display={'flex'} justifyContent={'space-between'} flexDirection={isBetween200And840 ? 'column' : 'row'} width={isBetween200And840 ? '100%' : '95%'}>
        <TabList width={isBetween200And840 ? '100%' : '50%'} display={'flex'} flexDirection={isBetween200And840 ? 'column' : 'row'}>
          <Tab>Ongoing</Tab>
          <Tab>Completed</Tab>
          <Tab>Cancelled</Tab>
          <Tab>Drafts</Tab>
        </TabList>
        <Button leftIcon={<FaPlusCircle />} colorScheme={'blue'} variant='solid' width={isBetween200And840 ? '100%' : '20%'} marginTop={isBetween200And840 ? '10px' : ''}>
          Create a Project
        </Button>
      </Tabs>

      <Box maxW="1200px" mx="auto" mt={4}>
        <Grid templateColumns={isBetween200And840 ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'}

          gap={2}
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Grid>
      </Box>
    </div>
  )
}


