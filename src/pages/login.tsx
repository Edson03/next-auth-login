import { getProviders, signIn } from 'next-auth/client'
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
    const providers = await getProviders()
    //console.log(providers)
    return {
      props: { providers }
    }
}

export default login
