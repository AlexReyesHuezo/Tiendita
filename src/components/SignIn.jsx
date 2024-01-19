import { useForm } from 'react-hook-form'
import { emailValidation, minPassword, maxPassword } from './../utils/validator'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from './../firebase'

export const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const auth = getAuth(app)

  const createUser = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      console.log(userCredential)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <div className="card-title">
          <h5>Create new user!</h5>
          <form onSubmit={handleSubmit(createUser)}>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Type your email"
                {...register('email', { required: 'Email is required', pattern: { emailValidation } })}
              />
            </div>
            {
              errors.email && <span className="text-danger">{errors.email.message}</span>
            }

            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Type your password"
                {...register('password', { required: 'Password is required', minLength: minPassword, maxLength: maxPassword })}
              />
            </div>
            {
              errors.password && <span className="text-danger">{errors.password.message}</span>
            }
            <div className="mb-3 d-grid gap-2">
              <button className="btn btn-primary">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
