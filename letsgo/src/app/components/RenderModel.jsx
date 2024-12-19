"use client"
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'

const RenderModel = ({children, className}) => {
  return (
    //importing canvas element form react three fiber
    <Canvas
    className={clsx('w-screen h-screen -z-10 relative', className)}>
        <Suspense fallback={null}>
            {children}
        </Suspense>
    </Canvas>
    
  )
}

export default RenderModel
