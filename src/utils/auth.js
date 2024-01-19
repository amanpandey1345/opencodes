import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./mongodb";
export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
  ],


  adapter:MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 3 * 24 * 60 * 60,
  },
  callbacks: {
   
    jwt({ token, user }) { 
      if(user) token.role = user.role
      if(user) token.id = user._id ?? user.id
      return token  
    },
    session({ session, token }) { 
      session.user.role = token.role
      session.user.id = token.id
      return session
    }
  },
  // pages: {
  //   error: "/login",
  //   signIn:"/login"
  // },
  debug: process.env.NODE_ENV === "development",
};

export const getAuthSession = () => getServerSession(authOptions);
