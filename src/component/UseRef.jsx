import React, { useRef } from 'react'



function UseRef() {

    let nameInput = useRef();
    let emailInput = useRef();
    function submitHandler(event) {
        event.preventDefault();
        console.log(nameInput.current.value, emailInput.current.value)
        nameInput.current.value="";
        emailInput.current.value="";
    }
    return (
        <>
            <div className="mx-auto flex h-screen w-full items-center justify-center gap-3">
                <form action="" className='w-[400px] shadow p-4 rounded-xl' onSubmit={submitHandler}>
                    <h1 className='text-xl font-bold'>This is a useRef Input</h1>
                    <p className='text-neutral-500 py-1'>In useRef we target the input field using the ref attribute and then we can access the value using ref.current.value </p>
                    <input className='border border-neutral-400 w-full outline-none  p-2 rounded-lg mb-2' ref={nameInput} type="text" placeholder='Enter the First Name' />
                    <input className='border border-neutral-400 w-full outline-none  p-2 rounded-lg mb-2' ref={emailInput} type="email" placeholder='Enter the Email' />
                    {/* <butn className='bg-black text-white px-4 py-2 rounded-xl' >Submit</button> */}
                    <input className='bg-black text-white py-2 px-4 rounded ' type="submit" />
                </form>
            </div>
        </>
    )
}

export default UseRef
