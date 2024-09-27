import React from 'react'
import { Stack, Text, Button } from "@chakra-ui/react"
import { FaPlay } from "react-icons/fa"

export default function CardFooter() {
    return (
        <Stack direction={'row'} width={'95%'} height={'50px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={2}>

            <Text fontSize={'large'} fontWeight={'bold'}>Follow up with manager</Text>

            <Button leftIcon={<FaPlay style={{ height: '5vh', marginLeft: '12px' }} />}

                colorScheme='blue' variant='solid' width={'40px'} height={'40px'} />
        </Stack>
    )
}

