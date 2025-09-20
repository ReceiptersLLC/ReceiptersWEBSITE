import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 'demo_google_client_id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'demo_google_secret',
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || 'demo_facebook_app_id',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'demo_facebook_secret',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Handle sign in logic here
      console.log('Sign in:', { user, account, profile });

      // For demo mode, allow sign in without backend validation
      if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
        return true;
      }

      // In production, you would validate with your backend
      try {
        const response = await fetch('https://engine.receipters.com/api/v1/auth/oauth/' + account.provider, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_token: account.access_token,
            user_info: profile,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          // Store token in session
          user.token = data.token;
          return true;
        }
      } catch (error) {
        console.error('OAuth validation failed:', error);
      }

      return false;
    },
    async jwt({ token, user }) {
      if (user?.token) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'demo-nextauth-secret-key-for-development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
