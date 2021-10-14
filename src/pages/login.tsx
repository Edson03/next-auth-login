import { getProviders, getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'
import Layout from "../components/Layout"
import Login from "../components/login/Login"

const login = ({providers}: any) => {
    return (
        <Layout>
            <Login providers={providers}/>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const session = await getSession(context)
  
    if (session) {
      return {
        redirect: {
          destination: '/restrict',
          permanent: false,
        },
      }
    }
    
    const providers = await getProviders()
    return {
      props: { providers }
    }
}

export default login
