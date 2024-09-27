import {Box,useMediaQuery } from '@chakra-ui/react'
import Timeline from './timeline'
import Badges from './badges'
import CardFooter from './cardFooter'

export default function Cards() {
  const [isBetween200And840] = useMediaQuery("(min-width: 200px) and (max-width: 840px)");
  return (
    <Box width={isBetween200And840?'335px':'364px'} mt={5} height={'268px'} border={'1px solid #DADAD7'} pt={isBetween200And840?0:2} pl={isBetween200And840?0:2}>
      <Timeline />
      <Badges />
      <CardFooter />
    </Box>
  )
}

