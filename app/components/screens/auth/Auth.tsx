import { FC, useState } from 'react'

import { useAuthRedirect } from './useAuthRedirect'
import Login from '@/templates/auth/Login'
import Register from '@/templates/auth/Register/Register'

const Auth: FC = () => {
	useAuthRedirect()
	const [authType, setAuthType] = useState<'login' | 'register'>('login')

	const toggleAuthType = () => {
		if (authType === 'login') {
			setAuthType('register')
		} else {
			setAuthType('login')
		}
	}

	return authType === 'login' ? (
		<Login toggleAuthType={toggleAuthType} />
	) : (
		<Register toggleAuthType={toggleAuthType} />
	)
}

export default Auth
