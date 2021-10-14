import Link from 'next/link'
import { useState } from 'react'
import { Box, Flex, Text, Spacer } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    signIn, 
    signOut,
    useSession
} from 'next-auth/client'
  

const MenuItems = ({ children, isLast, to = '/' }: any) => {
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        ml="8px"
        textDecoration="underline"
      >
        <Link href={to}>{children}</Link>
      </Text>
    );
  };

const Navbar = (props: any) => {

    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    const [ session, loading ] = useSession()

    return (
        <Flex w="100%" justify="center" bg="#02689D" position='absolute' left={0} top={0}>
            <Box
                as="nav"
                role="contentinfo"
                mx="auto"
                maxW="7xl"
                py="6"
                bg="#02689D"
                color="#FFF"
                px={{
                    base: '4',
                    md: '8',
                }}
            >
            <Flex
                // as="nav"
                // align="center"
                // justify="space-between"
                // wrap="wrap"
                // w={['100%', '100%', '90%', '5xl']}
                // // h="56px"
                // py="6"
                // p={3}
                // bg="#02689D"
                // color="#fff"
                // {...props}
            >
            
                <Box>
                    <MenuItems to="/">Home</MenuItems>
                </Box>

                <Spacer />

                <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                    {show ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={8} h={8} />}
                </Box>

                <Box
                    display={{ base: show ? "block" : "none", md: "block" }}
                    flexBasis={{ base: "100%", md: "auto" }}
                >
                    <Flex
                        align={["center", "center", "center", "center"]}
                        justify={["center", "space-between", "flex-end", "flex-end"]}
                        direction={["column", "row", "row", "row"]}
                        pt={[4, 4, 0, 0]}
                    >
                        <MenuItems to="/norestrict">No restrict</MenuItems>
                        <MenuItems to="/restrict">Restrict</MenuItems>
                        {!session && <MenuItems to="/login">Login</MenuItems>}
                        {session && <Box as='a' textDecoration='underline' cursor='pointer' onClick={() => signOut()}>Logout</Box>}
                    </Flex>
                </Box>
            </Flex>
            </Box>
        </Flex>
    )
}

export default Navbar