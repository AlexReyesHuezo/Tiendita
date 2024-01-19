import { SignIn } from './../components/SignIn'

export const HomePage = () => {

  return (
    <>
      <h1>Welcome, Create new user!</h1>

      <div className="text-center">
        <div className="container d-flex justify-content-center">
          <SignIn />
        </div>
      </div>
    </>
  )
}
