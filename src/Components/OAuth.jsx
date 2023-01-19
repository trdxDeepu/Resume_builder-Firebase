import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { db } from '../Firebase';
import { getAuth ,signOut} from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore';

const OAuth = () => {
  const navigate = useNavigate();


const handleClick =async () => {

  
 try{
  const auth = getAuth();
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const user = result.user;
  console.log(user)
  // localStorage.setItem("name", user.displayName);
  //checking user already exist or not 

  const docRef = doc(db,"users",user.uid)
  const docSnap = await getDoc(docRef)
  console.log(docSnap)

  if(!docSnap.exists()) {
    await setDoc(docRef,{
      name:user.displayName,
      email:user.email,
      timestamp:serverTimestamp(),
    })
  }


  toast.success("🙌🙌 Successfully signed in")
  navigate('/')

  // signOut(auth).then(()=>{
  //   toast.success("Signed out")
  // } ).catch((err)=>{
  //   toast.error("an error")
  // })

 }
 catch (err){
     
  toast.error("🤷‍♂️🤷‍♂️ Could not authorize with Google")
  console.log(err)
  
}

}

return (
    <button type='button' onClick={handleClick} className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg rounded-xl transition duration-150 ease-in-out ' > <FcGoogle className='text-2xl bg-white rounded-full mr-2'/> Continue With Google</button>
  )
}

export default OAuth