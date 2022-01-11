import {useNavigate} from 'react-router-dom'
import {createChannel} from 'utils/crud/channel'
import CreateChannelLayout from 'layouts/create-channel'
import {CreateForm} from 'components/channels/forms'
import LoginRequired from 'components/login-required'

export default function PageChannelNew({dbSession: {session, database}}) {
	const navigate = useNavigate()

	const handleCreate = async (channel) => {
		const {data, error} = await createChannel({database, channel, user: session?.user})
		if (error) return {error}
		navigate('/' + data.channel.slug)
	}

	return (
		<CreateChannelLayout>
			<h1>Create channel</h1>
			<CreateForm onSubmit={handleCreate} disabled={!session?.user} />
			{!session?.user && (
				<>
					<small>First, </small>
					<LoginRequired message="to create (or import) a radio channel" />
				</>
			)}
		</CreateChannelLayout>
	)
}