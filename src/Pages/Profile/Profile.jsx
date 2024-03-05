import img from '../../assets/Login/img.jpg'
const Profile = () => {
    return (
        <div className="max-w-screen-md py-40 mx-auto">
            <div className="h-64 rounded-sm bg-[#2424277a]">
            </div>
                <img className='w-40 h-40 rounded-full relative -top-20' src={img} alt="" />
            <div className='-mt-16'>
                <h1 className='text-white text-4xl'>Atik Rahad</h1>
                <p className='text-slate-300'>Bio</p>
            </div>
            <div className='flex gap-3 text-slate-300'>
                <h1>Followers</h1>
                <h1>Following</h1>
            </div>
            <div className='flex gap-5 items-center justify-between'>
            <div className='my-20 w-full space-y-3 p-5 rounded-sm bg-[#2424277a]'>
                <h1 className='text-2xl text-white'>Name: Atik Rahad</h1>
                <h1 className='text-2xl text-white'>Email: atikrahad1@gmail.com</h1>
                <h1 className='text-2xl text-white'>Phone: N/A</h1>
            </div><div className='my-20 w-full space-y-3 p-5 rounded-sm bg-[#2424277a]'>
                <h1 className='text-2xl text-white'>Country: N/A</h1>
                <h1 className='text-2xl text-white'>Gender: N/A</h1>
                <h1 className='text-2xl text-white'>Address: N/A</h1>
            </div>
            </div>
            <div className='space-x-4'>
                <button className='btn-bg'>Update Profile</button>
                <button className='btn-bg'>Apply For Trainer</button>
            </div>

        </div>
    );
};

export default Profile;