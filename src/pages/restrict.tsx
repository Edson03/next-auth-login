import { GetServerSideProps } from 'next'
import { getSession } from "next-auth/client"
import Layout from "../components/Layout"
import { Flex } from '@chakra-ui/react'

interface Session {
    session: {
        user: {
        name: string
        email: string
        image: string
        },
        expires: string
    }
}

const restrict = ({session}: Session) => {

    return(
        <Layout>
            <Flex w='100%' h='100%' align='center' justify='center'>
                <p>You can acess this page because you are
                   signed in as {session.user?.email}</p>
            </Flex>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context)
  
    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }
  
    return {
      props: { session }
    }
}

export default restrict
