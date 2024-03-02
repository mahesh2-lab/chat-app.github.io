import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp 
        <span className='text-blue-500'>Chat App</span>
        </h1>
        <form action="">
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type="text" placeholder='John Duo' className='w-full input input-bordered h-10'/>
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder='johnduo' className='w-full input input-bordered h-10'/>
            </div>

            <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
            </div>
            <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Conform Password</span>
                </label>
                <input type="password" placeholder='Conform Password' className='w-full input input-bordered h-10'/>
            </div>
             
             <GenderCheckBox/>

            <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Already"} have a account? Login
            </a>
            <div>
                <button className='btn btn-block btn-sm mt-2'>SignUp</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'
// 
// const SignUp = () => {
//   return (
    // <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      {/* <div className='w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> */}
      {/* <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp  */}
        {/* <span className='text-blue-500'>Chat App</span> */}
        {/* </h1> */}
        {/* <form action=""> */}
            {/* <div> */}
                {/* <label className='label p-2'> */}
                    {/* <span className='text-base label-text'>Full Name</span> */}
                {/* </label> */}
                {/* <input type="text" placeholder='John Duo' className='w-full input input-bordered h-10'/> */}
            {/* </div> */}
            {/* <div> */}
                {/* <label className='label p-2'> */}
                    {/* <span className='text-base label-text'>Username</span> */}
                {/* </label> */}
                {/* <input type="text" placeholder='johnduo' className='w-full input input-bordered h-10'/> */}
            {/* </div> */}
{/*  */}
            {/* <div> */}
                {/* <label className='label p-2'> */}
                        {/* <span className='text-base label-text'>Password</span> */}
                {/* </label> */}
                {/* <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'/> */}
            {/* </div> */}
            {/* <div> */}
                {/* <label className='label p-2'> */}
                        {/* <span className='text-base label-text'>Conform Password</span> */}
                {/* </label> */}
                {/* <input type="password" placeholder='Conform Password' className='w-full input input-bordered h-10'/> */}
            {/* </div> */}
             {/*  */}
             {/* <GenderCheckBox/> */}
{/*  */}
            {/* <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'> */}
                {/* {"Already"} have a account? Login */}
            {/* </a> */}
            {/* <div> */}
                {/* <button className='btn btn-block btn-sm mt-2'>SignUp</button> */}
            {/* </div> */}
        {/* </form> */}
      {/* </div> */}
    {/* </div> */}
//   )
// }
// 
// export default SignUp
// 