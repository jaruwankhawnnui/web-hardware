import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
    return (
        <form action={doSocialLogin}>


            <div className='flex justify-center items-start min-h-screen '>
                <div className='bg-white w-96 mt-4 shadow-lg p-10 rounded-l'>
                    <div className='flex flex-col justify-center mb-4'>
                        <div className='text-2xl font-serif text-black text-center'>
                            ยินดีต้อนรับสู่
                        </div>
                        <div className='text-sm text-blue-900 text-center mt-2'>
                            Computer Hardware Laboratory Website
                        </div>
                        <div className='text-l font-sans text-gray-300 text-center mt-6'>
                            Login/เข้าสู่ระบบ
                        </div>
                    </div>
                    <div className='mt-4'>
                        <input
                            type='text'
                            className='w-full h-12 rounded-xl p-4 border border-gray-400 text-gray-700 outline-none mb-4'
                            placeholder='อีเมลหรือชื่อผู้ใช้'
                        />
                        <input
                            type='password'
                            className='w-full h-12 rounded-xl p-4 border border-gray-400 text-gray-700 outline-none mb-4'
                            placeholder='รหัสผ่าน'
                        />
                    </div>
                    <div className='mt-4'>
                        <button className='w-full h-12 bg-black hover:bg-gray-800 text-white rounded-xl font-bold'>
                            เข้าสู่ระบบ
                        </button>
                        <div className='flex items-center mt-4'>
                            <div className='flex-grow border-t border-black'></div>
                            <span className='mx-4 text-gray-500'>or</span>
                            <div className='flex-grow border-t border-black'></div>
                        </div>
                        <button className="mt-6 w-full h-12 bg-black hover:bg-gray-800 text-white rounded-xl font-bold" type="submit" name="action" value="google">
                            Sign In With Google
                        </button>
                        <button className='mt-4 flex items-center justify-center w-full h-12 bg-blue-900 hover:bg-blue-800 text-white rounded-xl'>
                            PSU Passport
                        </button>

                    </div>
                </div>



            </div>
        </form>
    );
};

export default LoginForm;
