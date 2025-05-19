'use client';

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import { TextureLoader } from "three"
import * as THREE from 'three'

interface TechStacksProps {
    position: [number, number, number];
    texture: string;
}

function WaveBackground() {
    const mesh = useRef<THREE.Mesh>(null!)
    const [points] = useState<THREE.Vector3[]>(() => {
        const points: THREE.Vector3[] = []
        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < 50; j++) {
                points.push(new THREE.Vector3((i - 25) * 0.5, (j - 25) * 0.5, 0))
            }
        }
        return points
    })

    useFrame((state: { clock: THREE.Clock }) => {
        const time = state.clock.getElapsedTime()
        points.forEach((point: THREE.Vector3) => {
            point.z = Math.sin(time + point.x * 0.1) * 0.5
        })
        if (mesh.current) {
            mesh.current.geometry.setFromPoints(points)
        }
    })

    return (
        <points ref={mesh}>
            <bufferGeometry />
            <pointsMaterial size={0.05} color="#ffffff" />
        </points>
    )
}

function TechStacks({ position, texture }: TechStacksProps) {
    const [textureMap, setTextureMap] = useState<THREE.Texture | null>(null)
    const meshRef = useRef<THREE.Mesh>(null!)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const loader = new TextureLoader()
        loader.load(
            texture,
            (loadedTexture) => {
                setTextureMap(loadedTexture)
            },
            undefined,
            (error) => {
                console.error('Error loading texture:', error)
            }
        )
    }, [texture])

    if (!textureMap) return null

    return (
        <mesh 
            ref={meshRef} 
            position={position}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
        >
            <planeGeometry args={[1.2, 1.2]} />
            <meshBasicMaterial 
                map={textureMap}
                transparent={true}
                opacity={1}
            />
            {isHovered && (
                <mesh position={[0, 0, -0.1]}>
                    <planeGeometry args={[1.4, 1.4]} />
                    <meshBasicMaterial 
                        color="#ffffff"
                        transparent={true}
                        opacity={0.3}
                    />
                </mesh>
            )}
        </mesh>
    )
}

function TechStacksScene() {
    const techStacks = [
        {name: "React", textures: "/textures/react.svg"},
        {name: "Javascript", textures: "/textures/js.svg"},
        {name: "Java", textures: "/textures/java.svg"},
        {name: "Python", textures: "/textures/python.svg"},
        {name: "C++", textures: "/textures/cpp.svg"},
        {name: "C", textures: "/textures/c.svg"},
        {name: "C#", textures: "/textures/csharp.svg"},
        {name: "Typescript", textures: "/textures/ts.svg"},
        {name: "Git", textures: "/textures/git.svg"},
        {name: "Github", textures: "/textures/github.svg"},
        {name: "Golang", textures: "/textures/go.svg"},
        {name: "NextJS", textures: "/textures/nextjs.svg"},
        {name: "NodeJS", textures: "/textures/nodejs.svg"},
        {name: "MySQL", textures: "/textures/mysql.svg"},
        {name: "PostgreSQL", textures: "/textures/postgresql.svg"},
        {name: "Figma", textures: "/textures/figma.svg"},
    ]

    const iconsPerRow = 6;
    const rowSpacing = 2;
    const colSpacing = 2;
    const rows = Math.ceil(techStacks.length / iconsPerRow);

    // Array untuk offset per baris
    const [time, setTime] = useState(0);
    useFrame((state) => {
        setTime(state.clock.getElapsedTime());
    });
    const maxOffset = 2;

    return (
        <>
            <color attach="background" args={['#000000']} />
            <WaveBackground />
            <ambientLight intensity={1.2} />
            <pointLight position={[10, 10, 10]} intensity={2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} />
            <pointLight position={[0, 0, 10]} intensity={1.5} />
            {Array.from({ length: rows }).map((_, rowIdx) => {
                // Setiap baris punya phase berbeda
                const phase = rowIdx * Math.PI / 3;
                const offset = Math.sin(time * 1 + phase) * maxOffset;
                return techStacks.slice(rowIdx * iconsPerRow, (rowIdx + 1) * iconsPerRow).map((tech, colIdx) => (
                    <TechStacks
                        key={tech.name}
                        position={[
                            (colIdx - (iconsPerRow - 1) / 2) * colSpacing + offset,
                            (rows - 1) / 2 * rowSpacing - rowIdx * rowSpacing,
                            0
                        ]}
                        texture={tech.textures}
                    />
                ))
            })}
        </>
    )
}

export default function TechStacksShowcase() {
    return (
        <div className="w-full h-[400px]">
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
                <TechStacksScene />
            </Canvas>
        </div>
    )
}