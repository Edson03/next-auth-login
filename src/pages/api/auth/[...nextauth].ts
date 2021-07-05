import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from 'next';

type credential = {
    email: string;
    password: string;
}

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            id: 'credentials',
            name: 'Credentials',
            type: 'credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // credentials: {
            //   username: { label: "Username", type: "text", placeholder: "jsmith" },
            //   password: {  label: "Password", type: "password" }
            // },
            async authorize(credentials: credential, req) {
                console.log(credentials)
                console.log('inside authorize: req')
                console.log(req.body)
              // Add logic here to look up the user from the credentials supplied
              const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        
              if (credentials.email === 'edson.cruz@satc.edu.br') {
                // Any object returned will be saved in `user` property of the JWT
                return user
              } else {
                // If you return null or false then the credentials will be rejected
                return null
                // You can also Reject this callback with an Error or with a URL:
                // throw new Error('error message') // Redirect to error page
                // throw '/path/to/redirect'        // Redirect to a URL
              }
            }
    
    
            // const res = await fetch("/your/endpoint", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            //   })
            //   const user = await res.json()
              
            //   // If no error and we have user data, return it
            //   if (res.ok && user) {
            //     return user
            //   }
            //   // Return null if user data could not be retrieved
            //   return null
        })
    ],
    pages: {
        signIn: "/login",
    },
    session: { 
        jwt: true,
    },
    jwt: {
        // A secret to use for key generation - you should set this explicitly
        // Defaults to NextAuth.js secret if not explicitly specified.
        secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',    
    }
    
})

// const options = {
//   providers: [
//     Providers.Credentials({
//         // The name to display on the sign in form (e.g. 'Sign in with...')
//         name: 'Credentials',
//         // The credentials is used to generate a suitable form on the sign in page.
//         // You can specify whatever fields you are expecting to be submitted.
//         // e.g. domain, username, password, 2FA token, etc.
//         // credentials: {
//         //   username: { label: "Username", type: "text", placeholder: "jsmith" },
//         //   password: {  label: "Password", type: "password" }
//         // },
//         async authorize(credentials: credential, req) {
//             console.log(credentials.email)
//             console.log('inside authorize: req')
//             console.log(req.body)
//           // Add logic here to look up the user from the credentials supplied
//           const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    
//           if (credentials.email === 'jsmith@example.com') {
//             // Any object returned will be saved in `user` property of the JWT
//             return user
//           } else {
//             // If you return null or false then the credentials will be rejected
//             return null
//             // You can also Reject this callback with an Error or with a URL:
//             // throw new Error('error message') // Redirect to error page
//             // throw '/path/to/redirect'        // Redirect to a URL
//           }
//         }


//         // const res = await fetch("/your/endpoint", {
//         //     method: 'POST',
//         //     body: JSON.stringify(credentials),
//         //     headers: { "Content-Type": "application/json" }
//         //   })
//         //   const user = await res.json()
          
//         //   // If no error and we have user data, return it
//         //   if (res.ok && user) {
//         //     return user
//         //   }
//         //   // Return null if user data could not be retrieved
//         //   return null
//     })
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   site: process.env.NEXTAUTH_URL
// };

// export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);