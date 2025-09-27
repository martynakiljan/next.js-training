type ContactLayout = {
	children: React.ReactNode
}

const ContactLayout = ({ children }: ContactLayout) => {
	return (
		<>
			<div>{children}</div>
		</>
	)
}

export default ContactLayout
