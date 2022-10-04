import { useActions } from '@/hooks/useActions'

const LogoutButton = () => {
	const { logout } = useActions()
	const handleClick = () => {
		confirm('Are you really want to log out?') ? logout() : null
	}
	return (
		<div
			className="text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-4 focus:outline-none focus:ring-blue-300 
      font-medium rounded-lg text-sm p-1.5 md:p-2.5 text-center inline-flex items-center 
      mx-2 cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			onClick={handleClick}
		>
			<span className="material-icons-outlined">logout</span>
			<span className="sr-only">Logout</span>
		</div>
	)
}

export default LogoutButton
