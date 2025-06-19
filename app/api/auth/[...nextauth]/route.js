import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

const handler = NextAuth({
  providers: [

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({

      async authorize(credentials) {
        await connectDb();
        const user = await User.findOne({ email: credentials.email });

        if (user && (credentials.password === user.password)) {
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.username,
          };
        }

        if (!user) {
          const newUser = await User.create({
            email: credentials.email,
            username: credentials.email.split("@")[0].toLowerCase(), 
            password: credentials.password,
          });

          return {
            id: newUser._id.toString(),
            email: newUser.email,
            name: newUser.username,
          };

        }
        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {

    async session({ session}) {
      await connectDb();
      const user = await User.findOne({ email: session.user.email });
      session.user.name = user.username;
      return session;
    },

    async signIn({ user, account }) {
      await connectDb();
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser && account.provider === "github") {
        const created = await User.create({
          email: user.email,
          username: user.email.split("@")[0],
        });
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
