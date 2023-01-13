import React ,{useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show,setShow]=useState(false)

    useEffect(()=>{   //scroll navbar background color change
        window.addEventListener('scroll',()=>{
            if(window.scrollY>500){
                setShow(true)
            }else{
                setShow(false)
            }
        })
    },[])
  return (
    <div className={`nav-bar ${show && "nav_black"}`}>
        <img  className='nav-img'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        />
    </div>
  )
}

export default Nav