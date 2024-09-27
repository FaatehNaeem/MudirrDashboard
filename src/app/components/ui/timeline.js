import React from 'react';
import {
    Box,
    List,
    ListItem,
    UnorderedList,
    Flex,
    Divider,
    Text
} from '@chakra-ui/react';

import Image from 'next/image';

import { FaEllipsisV } from 'react-icons/fa';



const Timeline = () => {
    return (
        <Box>

            <Box width={'350px'} mt={2} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'flex-start'} ml={-5}>
                <Text fontWeight={'bold'} fontSize={'large'} ml={5}>Make an E-Commerce Website for a Brand Store</Text>
                <FaEllipsisV style={{ marginTop: '30px' }} color='#707066' />
            </Box>
            <Text fontSize={'smaller'} color={'#707066'}>Web</Text>

            <Flex align="center" mt={5}>
                <UnorderedList styleType="none" display="flex" alignItems="center">
                    <ListItem position="relative">
                        <Box
                            position="absolute"
                            left={-4} // Position the dot to the left
                            top="50%"
                            width="11.31px"
                            height="12px"
                            borderRadius="full"
                            bg="blue.500"
                            transform="translateY(-50%)"
                        />

                        <Image
                            src="/Timeline.png"
                            alt="Next.js logo"
                            width={90}
                            height={2}
                            priority
                            style={{ marginLeft: '-10px' }}
                        />

                    </ListItem>
                    <ListItem position="relative">
                        <Box
                            position="absolute"
                            left={-4} // Position the dot to the left
                            top="50%"
                            width="11.31px"
                            height="12px"
                            borderRadius="full"
                            bg="blue.500"
                            transform="translateY(-50%)"
                        />

                        <Image
                            src="/Timeline.png"
                            alt="Next.js logo"
                            width={90}
                            height={2}
                            priority
                            style={{ marginLeft: '-10px' }}
                        />
                    </ListItem>

                    <ListItem position="relative">
                        <Box
                            position="absolute"
                            left={-4} // Position the dot to the left
                            top="50%"
                            width="11.31px"
                            height="12px"
                            borderRadius="full"
                            bg="blue.500"
                            transform="translateY(-50%)"
                        />

                        <Image
                            src="/Timeline2.png"
                            alt="Next.js logo"
                            width={90}
                            height={2}
                            priority
                            style={{ marginLeft: '-10px' }}
                        />
                    </ListItem>

                    <ListItem position="relative">
                        <Box
                            position="absolute"
                            left={-4} // Position the dot to the left
                            top="50%"
                            width="11.31px"
                            height="12px"
                            borderRadius="full"
                            bg="gray.300"
                            transform="translateY(-50%)"
                        />
                    </ListItem>
                </UnorderedList>
                <Text color={'#707066'} fontSize="smaller" ml={6}>3/4 Done</Text>
            </Flex>
        </Box>
    );
};

export default Timeline;
