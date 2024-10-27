import { Button, Flex, Text, Box, Heading, Spacer, ButtonGroup, Center, Stack } from "@chakra-ui/react";
import { GiFoodTruck } from "react-icons/gi";
import { Input } from '@chakra-ui/react'
import { BsSearchHeart } from "react-icons/bs";
import styles from "./NavBar.module.css"

import { useColorMode } from '@chakra-ui/react';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";


function NavBar() {

    const { colorMode, toggleColorMode } = useColorMode();

    return <>

        <Flex minWidth='max-content' className={styles.nav} alignItems='center' gap='10'  >
            <Box p='2'>
                <Text fontSize={30} fontWeight={600} display='flex'>FOOD Store <GiFoodTruck fontSize={40} className={styles.iconss} /></Text>

            </Box>

            <Stack className={styles.searchBox} width="540px" >
                <Input name='name' id='name' variant='flushed' placeholder='Search Food Here' fontSize='5x' />
            </Stack >
            <Button width="100px"><BsSearchHeart /></Button>

            <Spacer />

            <ButtonGroup gap='2'>
                <Button colorScheme='gray'>About us</Button>
                <Button colorScheme='gray'>Contact</Button>
                <Button colorScheme='gray'>Log in</Button>
                <Button colorScheme='gray' onClick={toggleColorMode}>
                    {colorMode === "light" ? <MdOutlineDarkMode fontSize={20} /> : <MdOutlineLightMode fontSize={20} />}
                </Button>
            </ButtonGroup>
        </Flex >
    </>

}

export default NavBar;