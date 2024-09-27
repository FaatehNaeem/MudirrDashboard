"use client"
import React from 'react';
import Image from 'next/image';

import {
    Avatar, Wrap, WrapItem,
    Accordion, AccordionItem,
    AccordionButton, AccordionPanel,
    AccordionIcon, Box,
    Button, Stack,
    Drawer, DrawerBody, DrawerHeader,
    DrawerOverlay, DrawerContent, DrawerCloseButton, Card, CardBody, Heading, StackDivider,useDisclosure
} from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';


import { Badge } from '@chakra-ui/react'


export default function Drawer2({ isOpen, onClose }) {


    return (
        <>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Image
                                src="/Logo.png"
                                alt="Next.js logo"
                                width={304}
                                height={40}
                                priority
                            />
                        </DrawerHeader>
                        <DrawerBody>

                            <Wrap style={{ position: 'relative', top: '20px', borderRadius: "300px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <WrapItem>
                                    <Avatar name='Dan Abrahmov' src='/female.jpg' />

                                    <Accordion allowMultiple>
                                        <AccordionItem style={{ borderBottomWidth: '0px', borderTopWidth: '0px' }}>
                                            <h2>
                                                <AccordionButton _expanded={{ bg: '#F4F6FA', color: 'black' }}
                                                    _hover={{ backgroundColor: '#F4F6FA' }}
                                                >
                                                    <Box as='span' flex='1' textAlign='left' >

                                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                            <h3 style={{ fontWeight: 'bold' }}>Haseena Jameela</h3>

                                                            <AccordionIcon color={'black'} fontWeight={'bold'} ml={8} />
                                                        </div>

                                                        Haseenajameela@email.c...
                                                    </Box>
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Lorem ipsum
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>


                                </WrapItem>

                                <Stack direction='row' spacing={4} style={{ border: '1px solid #DADAD7', padding: '4px', borderRadius: '6px', backgroundColor: 'white', width: '272px' }}>
                                    <Button backgroundColor={'#DBE2F0'} variant='solid' color={'#334876'} width={'132px'}>
                                        Personal
                                    </Button>
                                    <Button colorScheme='white' variant='solid' color={'#707066'} width={'132px'} _hover={{ backgroundColor: "#DBE2F0" }}>
                                        Invited
                                    </Button>
                                </Stack>


                                <Card backgroundColor={'#EBF0FA'} width={'272px'}>

                                    <CardBody>

                                        <Stack divider={<StackDivider />} spacing='4'>

                                            <Box mt={-4}>
                                                <Heading size='xs' textTransform='uppercase' backgroundColor={'white'}
                                                    width={'100%'} height={'36px'} borderRadius={'4px'} display={'flex'} alignItems={'center'} flexDirection={'row'} p={4} gap={2}>
                                                    <StarIcon width={'16.67px'} height={'15.83px'} color={'#050504'} />
                                                    Dashboard
                                                </Heading>

                                                <Heading size='xs' textTransform='uppercase'
                                                    width={'100%'} height={'36px'} borderRadius={'4px'} display={'flex'} alignItems={'center'} flexDirection={'row'} p={4} gap={2} mt={2} color={'#707066'}>
                                                    <Image
                                                        src="/Vector.png"
                                                        alt="Next.js logo"
                                                        width={16.67}
                                                        height={15.83}
                                                        priority
                                                    />
                                                    Project History
                                                </Heading>

                                                <Heading size='xs' textTransform='uppercase'
                                                    width={'100%'} height={'36px'} borderRadius={'4px'} display={'flex'} alignItems={'center'} flexDirection={'row'} p={4} gap={2} mt={2} color={'#707066'}>
                                                    <Image
                                                        src="/Vector.png"
                                                        alt="Next.js logo"
                                                        width={16.67}
                                                        height={15.83}
                                                        priority
                                                    />

                                                    Client History
                                                </Heading>

                                                <Heading size='xs' textTransform='uppercase'
                                                    width={'100%'} height={'36px'} borderRadius={'4px'} display={'flex'} alignItems={'center'} flexDirection={'row'} p={4} gap={2} mt={2} color={'#707066'}>
                                                    <Image
                                                        src="/Vector.png"
                                                        alt="Next.js logo"
                                                        width={16.67}
                                                        height={15.83}
                                                        priority
                                                    />

                                                    Emails
                                                </Heading>

                                            </Box>


                                            <Box mt={-4}>

                                                <Accordion allowMultiple>
                                                    <AccordionItem border={'none'}>

                                                        <AccordionButton>
                                                            <AccordionIcon />
                                                            <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#3C3C34'}>
                                                                WORKSPACES

                                                                <Badge fontSize={'10px'} backgroundColor={'#DADAD7'}
                                                                    color={'#3C3C34'} borderRadius={'12px'} ml={3}>Coming Soon</Badge>
                                                            </Box>
                                                        </AccordionButton>

                                                        <AccordionPanel pb={4}>

                                                            <AccordionButton>
                                                                <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#707066'}>
                                                                    Work Space Name 1
                                                                </Box>
                                                                <AccordionIcon color={'#707066'} />
                                                            </AccordionButton>

                                                            <AccordionButton>
                                                                <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#707066'}>
                                                                    Work Space Name 2
                                                                </Box>
                                                                <AccordionIcon color={'#707066'} />
                                                            </AccordionButton>

                                                            <AccordionButton>
                                                                <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#707066'}>
                                                                    Work Space Name 3
                                                                </Box>
                                                                <AccordionIcon color={'#707066'} />
                                                            </AccordionButton>

                                                            <Button color={'#5876B7'} ml={12} mt={2}>See All</Button>

                                                        </AccordionPanel>


                                                    </AccordionItem>


                                                </Accordion>

                                            </Box>


                                            <Box mt={-4}>

                                                <Accordion allowMultiple>
                                                    <AccordionItem border={'none'}>

                                                        <AccordionButton>
                                                            <AccordionIcon />
                                                            <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#3C3C34'}>
                                                                LAUNCHPAD

                                                            </Box>
                                                        </AccordionButton>

                                                        <AccordionPanel pb={4}>

                                                            <AccordionButton>
                                                                <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#707066'}>
                                                                    Business Name 1
                                                                </Box>
                                                                <AccordionIcon color={'#707066'} />
                                                            </AccordionButton>

                                                            <AccordionButton>
                                                                <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#707066'}>
                                                                    Business Name 2
                                                                </Box>
                                                                <AccordionIcon color={'#707066'} />
                                                            </AccordionButton>

                                                            <AccordionButton>
                                                                <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#707066'}>
                                                                    Business Name 3
                                                                </Box>
                                                                <AccordionIcon color={'#707066'} />
                                                            </AccordionButton>

                                                            <Button color={'#5876B7'} ml={12} mt={2}>See All</Button>

                                                        </AccordionPanel>


                                                    </AccordionItem>


                                                </Accordion>

                                            </Box>

                                        </Stack>
                                    </CardBody>
                                </Card>



                                <Card backgroundColor={'#F4F6FA'} width={'280px'} border={'none'} boxShadow={'none'}>

                                    <CardBody>

                                        <Stack divider={<StackDivider />} spacing='4'>

                                            <Box mt={-4}>

                                                <Accordion allowMultiple>
                                                    <AccordionItem border={'none'}>

                                                        <AccordionButton>
                                                            <AccordionIcon />
                                                            <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#3C3C34'}>
                                                                PINNED PROJECTS(3/3)

                                                            </Box>
                                                        </AccordionButton>

                                                        <AccordionPanel pb={4}>

                                                            <AccordionButton>
                                                                <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#707066'}>
                                                                    Project Name 1
                                                                </Box>
                                                                <AccordionIcon color={'#707066'} />
                                                            </AccordionButton>

                                                            <AccordionButton>
                                                                <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#707066'}>
                                                                    Project Name 2
                                                                </Box>
                                                                <AccordionIcon color={'#707066'} />
                                                            </AccordionButton>

                                                            <AccordionButton>
                                                                <Box as='span' flex='1' textAlign='left' fontWeight={'bold'} fontSize={'12px'} color={'#707066'}>
                                                                    Project Name 3
                                                                </Box>
                                                                <AccordionIcon color={'#707066'} />
                                                            </AccordionButton>

                                                            <Button color={'#5876B7'} ml={12} mt={2}>See All</Button>

                                                        </AccordionPanel>


                                                    </AccordionItem>


                                                </Accordion>

                                            </Box>

                                            <Box mt={2}>
                                                <Heading size='xs' textTransform='uppercase'
                                                    width={'100%'} height={'36px'} borderRadius={'4px'} display={'flex'} alignItems={'center'} flexDirection={'row'} p={4} gap={2}
                                                    color={'#707066'}>
                                                    <Image
                                                        src="/Vector.png"
                                                        alt="Next.js logo"
                                                        width={16.67}
                                                        height={15.83}
                                                        priority
                                                    />
                                                    Account Settings
                                                </Heading>

                                                <Heading size='xs' textTransform='uppercase'
                                                    width={'100%'} height={'36px'} borderRadius={'4px'} display={'flex'} alignItems={'center'} flexDirection={'row'} p={4} gap={2} mt={2} color={'#707066'}>
                                                    <Image
                                                        src="/Vector.png"
                                                        alt="Next.js logo"
                                                        width={16.67}
                                                        height={15.83}
                                                        priority
                                                    />
                                                    Logout
                                                </Heading>



                                            </Box>


                                        </Stack>
                                    </CardBody>
                                </Card>

                            </Wrap>

                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </>
    );
}
























