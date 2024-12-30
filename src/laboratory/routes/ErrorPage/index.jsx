import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const errorData = useRouteError()

  return (
    <div>
      <h1>Error Page</h1>
      {errorData.message && <p>{errorData.message}</p>}
    </div>
  )
}