import { useState } from "react";
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
    Alert,
    AlertIcon,
    CloseButton,
    AlertTitle,
    AlertDescription,
    Text
} from "@chakra-ui/react";
import { EmailIcon, ArrowBackIcon } from '@chakra-ui/icons'

import { Formik } from 'formik'
import * as Yup from "yup";

const CFaRegEnvelope = chakra(EmailIcon);
const CFaArrowLeft = chakra(ArrowBackIcon);

export interface loginValues {
    email: string;
}

const RecoveryPassword = () => {

    const [emailRecovery, setEmailRecovery] = useState('');
    const [sentEmail, setSentEmail] = useState(false)

    const alertRecovery =
        <Alert status="success">
            <AlertIcon />
            <Box flex="1">
                <AlertTitle>Solicitação confirmada!</AlertTitle>
                <AlertDescription display="block">
                    Você deverá receber em seu e-mail um link para recuperação de senha, 
                    caso o e-mail informado existir na nossa base de dados.
                </AlertDescription>
            </Box>
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setSentEmail(false)}/>
        </Alert>

    //code to validate and get values from login form
    const inputValuesRecovery = {
        email: ''
    }

    const validationSchemaRecovery = Yup.object({
        email: Yup.string().email("E-mail inválido").required("E-mail obrigatório")
    });

    const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmitRecovery = (values: loginValues) => {
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
        sleep(300).then(() => {
            window.alert(JSON.stringify(values, null, 2));
        });
        setSentEmail(true)
    };

    const handlePasswordRecovery = () => {
        console.log(emailRecovery)
        setSentEmail(true)
    }

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
                <Heading color={bgColor}>Recuperar senha</Heading>
                <Box 
                    minW={{ base: "95%", md: "350px" }}
                    maxW={{ base: "95%", md: "350px" }}
                >
                    <Formik
                        initialValues={inputValuesRecovery}
                        validationSchema={() => (validationSchemaRecovery)}
                        onSubmit={(values) => onSubmitRecovery(values)}
                    >
                        {({ handleSubmit, handleChange, values, errors, touched }) => (
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                            minH={{ base: "250px", md: "250px" }}
                            justifyContent="center"
                        >
                            {sentEmail ? alertRecovery : null}
                            <FormControl>
                                <InputGroup
                                    borderColor={errors.email && touched.email ? "red" : "#E2E8F0"}
                                >
                                    <InputLeftElement
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

                                <FormHelperText textAlign="left">
                                    <Link href="/login">
                                        <Flex direction="row" align="center" cursor="pointer">
                                            <CFaArrowLeft color="gray.300" ml="5px" mr="5px"/>
                                            Voltar para login
                                        </Flex>
                                    </Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                variant="solid"
                                color="#FFF"
                                bg={bgColor}
                                width="full"
                                onClick={() => handleSubmit()}
                            >
                                Enviar
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

export default RecoveryPassword
