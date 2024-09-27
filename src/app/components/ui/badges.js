import { Badge, Stack } from '@chakra-ui/react'

export default function Badges() {
    return (
        <>
            <Stack direction='column' mt={4} >
                <Badge color={"#5876B7"} width={68} height={'24px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Ongoing</Badge>
                <Badge color={"#5876B7"} width={170} height={'24px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Next milestone : Dec 5th</Badge>
            </Stack>
        </>
    )
}

