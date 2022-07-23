import { useForm } from '../hooks/useForm'


export const FormWithCustomHook = () => {

const {formState, onInputChange, username,email,password, onResetForm} = useForm ({
    username: '',
    email: '',
    password: ''
})


// const {username,email, password} = formState;

  return <>
    <h1>Form with custom hooks</h1>

    <hr/>
    
    {/* Text input */}
    <input 
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}

    />

    {/* Email input */}
    <input 
        type='email'
        className='form-control mt-2'
        placeholder='diosa@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}

    />

    {/* Password input */}

    <input 
        type='password'
        className='form-control mt-2'
        placeholder='password'
        name='password'
        value={password}
        onChange={onInputChange}

    />

    <button className='btn btn-primary mt-2' onClick={onResetForm}> Reset</button>

  </>
}