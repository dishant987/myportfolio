import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import React, { useRef } from 'react'

const Target = (props) => {

  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      duration: 1.5,
      y: targetRef.current.position.y+2,
      x: targetRef.current.position.x+2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true
    })
  })
  return (
    <mesh {...props} ref={targetRef} rotation={[0,Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
   
    </mesh>
  )
}

export default Target