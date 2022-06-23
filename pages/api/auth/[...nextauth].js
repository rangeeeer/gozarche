import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentioals",
      credentioals: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async autorize(credentiols, req) {
        const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
})
