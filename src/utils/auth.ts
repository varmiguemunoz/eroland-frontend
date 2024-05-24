import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(
        credentials: Record<"email" | "password", string> | undefined | any,
        req: any
      ): Promise<any> {
        const staticUser = {
          id: 1,
          token: "xgaskjhguyiolkglkjhgf",
          name: "Usuario Estático",
          username: "usuario_estatico",
          email: "development@bloomify.tech",
        };

        if (
          credentials.email === staticUser.email &&
          credentials.password === "development"
        ) {
          return staticUser;
        }

        return false;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },

    async session({ session, token }) {
      if (session) {
        session.user = token.user as any;
      }

      return session;
    },

    async signIn({ user }: any) {
      if (user) {
        console.log(user);
        return true;
      }

      return false;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;
