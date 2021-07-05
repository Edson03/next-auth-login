import Link from 'next/link'
import { useState } from 'react'
import { Box, Flex, Text, Select, Stack, Container, SimpleGrid } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const MenuItems = ({ children, isLast, to = '/' }: any) => {
    //console.log(children)
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

    return (
        <Flex w="100%" justify="center" bg="#02689D">
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w={['100%', '100%', '90%', '5xl']}
                h="56px"
                p={3}
                bg="#02689D"
                color="#fff"
                {...props}
            >
                <Stack direction="row">
                    {/* <Box position="relative">
                        Menu
                    </Box> */}
                    <MenuItems to="/">Home</MenuItems>
                </Stack>

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
                        <MenuItems to="/login">Login</MenuItems>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Navbar