import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import setAuthToken from "../../../utils/config/setAuthToken";
import { URL, OWNER_ID } from '../../../utils/config/server-config';
import axios from 'axios';
export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'username', type: 'text'},
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log("chalo" ,credentials)
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // try{
        //   let response = await axios.post(URL + '/login', credentials);
        //   console.log(response.data , "from server");
        //   // setAuthToken(response.data.token)
        //   const user = {email:response.data.token};
        //   // Return null if user data could not be retrieved
        //   return user;
        // }catch(e){
        //   console.log(e.response , 'error hceck')
        //   return null
        // }
        let response = await axios.post(URL + '/login', credentials);
        console.log(response , "from server");
        if(response.status === 200){
                    const user = {email:response.data.token};
                    return user
        }else{
          return null
        }
      },
    }),
  ],
  session:{
    jwt: true,
  },
  callbacks:{
    async signIn(user, account, profile) {
      console.log('din-------------', user , "din-------------")
      return {user, account, profile}
    },
  }
});
