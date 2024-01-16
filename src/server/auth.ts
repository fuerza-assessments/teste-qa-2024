import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { type Role } from '@prisma/client'
import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

import { env } from '~/env.js'
import { db } from '~/server/db'

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			ok?: boolean
			id: string
			name: string
			email: string
			image?: string | null
			role: Role
		} & DefaultSession['user']
	}
}

const github = [
	GithubProvider({
		clientId: env.GITHUB_ID ?? '',
		clientSecret: env.GITHUB_SECRET ?? '',
		authorization: 'https://github.com/login/oauth/authorize?scope=read:user+user:email+read:org',
		userinfo: {
			url: 'https://api.github.com/user',
			async request({ client, tokens }) {
				const profile = await client.userinfo(tokens.access_token ?? '')
				return profile
			},
		},
	}),
]

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
	callbacks: {
		session: ({ session, user }) => {
			console.log({ session, user })
			return {
				...session,
				user: {
					...session.user,
					...user,
				},
			}
		},
	},
	adapter: PrismaAdapter(db),
	providers: [...github],
	pages: {
		signIn: '/sign-in',
		signOut: '/sign-in',
	},
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
