import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

export default function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react_logo_circle.glb')
  return (
    <Float floatIntensity={1} >
      <group {...props} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>

          <mesh
           
            geometry={nodes['React-Logo_Material002_0'].geometry}
            material={materials['Material.002']}
            position={[0, 400.935, -150.181]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[15.166, 15.166, 52.734]}
          />
          <mesh
            
            geometry={nodes.Backdrop_Material001_0.geometry}
            material={materials['Material.01']}
            position={[-18.091, 400.935, -150.181]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[97.854, 97.854, 52.734]}
          />
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react_logo_circle.glb')