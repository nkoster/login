import useToken from '../../hooks/useToken'

function Dashboard() {
  const {token} = useToken()
  console.log(token)
  return (
    <h2>Dashboard {token.username}</h2>
  )
}

export default Dashboard
