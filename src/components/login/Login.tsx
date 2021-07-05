import { useState } from "react";
import { signin, signIn } from 'next-auth/client'
import Link from 'next/link'
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Alert,
    AlertIcon,
    CloseButton,
    Text
} from "@chakra-ui/react";
import { Formik } from 'formik'
import * as Yup from "yup";

import { ViewIcon, ViewOffIcon, EmailIcon, LockIcon } from '@chakra-ui/icons'

const CFaRegEnvelope = chakra(EmailIcon);
const CFaLock = chakra(LockIcon);

const Login = ({ providers }: any) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    interface loginValues {
        email: string;
        password: string;
    }

    //code to validate and get values from login form
    const inputValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("E-mail inválido").required("E-mail obrigatório"),
        password: Yup.string()
            .required("Digite a senha")
            .min(6, "A senha deve ter no mínimo 6 caracteres")
            .matches(/(?=.*[0-9])/, "A senha deve conter um número")
    });

    const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
    // interface SignInResponse {
    //     /** The reason for why the login process has stopped */
    //     error: string | null
    //     /** @see https://developer.mozilla.org/en-US/docs/Web/API/Response/status */
    //     status: number
    //     /** @see https://developer.mozilla.org/en-US/docs/Web/API/Response/ok */
    //     ok: boolean
    // }
    const onSubmit = async (values: loginValues) => {
        // const resp = await fetch('http://localhost:3000/api/users/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password
        //     })
        // });
        // const json = await resp.json();
        // sleep(300).then(async () => {
        //     window.alert(JSON.stringify(values, null, 2));
        //     let signin = await signIn("credentials", {redirect: false, email:values.email,password:values.password})
        //     console.log(signin?.error)
        // });

        let signin = await signIn("credentials", {redirect: false, callbackUrl: `${window.location.origin}/restrict`, email:values.email,password:values.password})
        if(signin?.error === 'CredentialsSignin' && signin?.status === 401){
            console.log(signin)
            setLoginerror(true)
        }else{
            console.log(signin)
        }
        // if (values.email === 'observatorioods@satc.edu.br' && values.password === '123456') {
        //     Router.replace('/admin');
        //     //setMessage(json);
        // } else {
        //     console.log('email ou senha incorretos')
        //     setLoginerror(true)
        // }
    };

    const [loginerror, setLoginerror] = useState(false)

    const alertMessage =
        <Alert status="error">
            <AlertIcon />
                Email ou senha incorretos!
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setLoginerror(false)} />
        </Alert>

    const bgColor = "#48aee3"

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="auto"
            pt="25px"
            pb="25px"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg={bgColor} />
                <Heading color={bgColor}>Bem-vindo</Heading>
                <Box minW={{ base: "95%", md: "350px" }}>

                    <Formik
                        initialValues={inputValues}
                        validationSchema={() => (validationSchema)}
                        onSubmit={(values) => onSubmit(values)}
                    >
                        {({ handleSubmit, handleChange, values, errors, touched }) => (
                            <form>
                                <Stack
                                    spacing={4}
                                    p="1rem"
                                    backgroundColor="whiteAlpha.900"
                                    boxShadow="md"
                                    minH={{ base: "280px", md: "300px" }}
                                    justifyContent="center"
                                >
                                    {loginerror ? alertMessage : null}
                                    <FormControl>
                                        <InputGroup
                                            borderColor={errors.email && touched.email ? "red" : "#E2E8F0"}
                                        >
                                            <InputLeftElement
                                                id="leftIcon"
                                                pointerEvents="none"
                                                children={<CFaRegEnvelope color="gray.300" />}
                                            />
                                            <Input
                                                id="emailInput"
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                        </InputGroup>
                                        {errors.email && touched.email ? <Text fontSize="xs" color="red" pl="3px">{errors.email}</Text> : null}
                                    </FormControl>
                                    <FormControl>
                                        <InputGroup
                                            borderColor={errors.password && touched.password ? "red" : "#E2E8F0"}
                                        >
                                            <InputLeftElement
                                                pointerEvents="none"
                                                color="gray.300"
                                                children={<CFaLock color="gray.300" />}
                                            />
                                            <Input
                                                id="passwordInput"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Senha"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <InputRightElement width="3.5rem">
                                                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        {errors.password && touched.password ? <Text fontSize="xs" color="red" pl="3px">{errors.password}</Text> : null}
                                        <FormHelperText textAlign="right">
                                            <Link href="/password-recovery">Esqueceu a senha?</Link>
                                        </FormHelperText>
                                    </FormControl>
                                    <Button
                                        borderRadius={0}
                                        variant="solid"
                                        bg={bgColor}
                                        color="#FFF"
                                        width="full"
                                        onClick={() => handleSubmit()}
                                    >
                                        Login
                            </Button>
                                </Stack>
                            </form>
                        )}
                    </Formik>

                </Box>
            </Stack>
        </Flex>
    )
}

export default Login
