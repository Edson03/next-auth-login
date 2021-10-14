import Layout from "../components/Layout"
import { Flex } from '@chakra-ui/react'

const norestrict = () => {
    return (
        <Layout>
            <Flex w='100%' h='100%' align='center' justify='center'>
                You can acess this page because not restrict
            </Flex>
        </Layout>
    )
}

export default norestrict
