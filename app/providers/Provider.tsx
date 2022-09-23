import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import Layout from '@/components/layout/Layout'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

import { store } from '@/store/store'

import AuthProvider from './AuthProvider/AuthProvider'
import HeadProvider from './HeadProvider/HeadProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<>
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ToastContainer
						position="top-right"
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<AuthProvider Component={Component}>
							<Layout />
							{children}
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
			</HeadProvider>
		</>
	)
}
export default MainProvider
