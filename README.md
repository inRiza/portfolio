# Implementasi Tech Stack 3D dengan Three.js

## Deskripsi
Panduan ini menjelaskan cara mengimplementasikan visualisasi tech stack 3D menggunakan Three.js dengan simulasi fisika. Komponen ini memungkinkan pengguna untuk men-drag gambar tech stack dan melihat efek gravitasi ketika dilepas.

## Prasyarat
- Node.js (versi 14 atau lebih tinggi)
- React
- Three.js
- Cannon.js (untuk simulasi fisika)

## Instalasi

1. Install dependencies yang diperlukan:
```bash
npm install three @react-three/fiber @react-three/drei @react-three/cannon
```

## Implementasi

1. Buat komponen baru untuk tech stack 3D:

```tsx
// components/TechStack3D.tsx
import { Canvas } from '@react-three/fiber'
import { Physics, useBox } from '@react-three/cannon'
import { useDrag } from '@use-gesture/react'
import { useState } from 'react'

function TechStackItem({ position, texture }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    args: [1, 1, 1], // ukuran box
  }))

  const bind = useDrag(({ movement: [x, y], first, last }) => {
    if (first) {
      api.mass.set(0) // nonaktifkan gravitasi saat di-drag
    }
    if (last) {
      api.mass.set(1) // aktifkan gravitasi saat dilepas
    }
    api.position.set(x / 100, -y / 100, 0)
  })

  return (
    <mesh ref={ref} {...bind()}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default function TechStack3D() {
  const techStack = [
    { name: 'React', texture: '/textures/react.png' },
    { name: 'Node.js', texture: '/textures/nodejs.png' },
    // Tambahkan tech stack lainnya
  ]

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        {techStack.map((tech, index) => (
          <TechStackItem
            key={tech.name}
            position={[index * 2 - 2, 5, 0]}
            texture={tech.texture}
          />
        ))}
      </Physics>
    </Canvas>
  )
}
```

2. Tambahkan komponen ke dalam post:

```tsx
// pages/posts/[slug].tsx
import TechStack3D from '../../components/TechStack3D'

export default function Post() {
  return (
    <div className="post-container">
      <h1>Tech Stack Saya</h1>
      <div className="tech-stack-container" style={{ height: '500px' }}>
        <TechStack3D />
      </div>
      {/* Konten post lainnya */}
    </div>
  )
}
```

## Cara Kerja

1. **Physics Engine**: Menggunakan Cannon.js melalui @react-three/cannon untuk simulasi fisika
2. **Drag & Drop**: Implementasi menggunakan @use-gesture/react untuk interaksi drag
3. **3D Rendering**: Three.js melalui @react-three/fiber untuk rendering 3D
4. **Gravitasi**: Aktif saat item dilepas, nonaktif saat di-drag

## Fitur
- Drag & drop tech stack items
- Simulasi gravitasi realistis
- Interaksi 3D yang responsif
- Customizable textures dan ukuran

## Tips Implementasi

1. **Optimasi Performa**:
   - Gunakan `React.memo()` untuk komponen yang sering di-render
   - Batasi jumlah physics objects
   - Gunakan texture yang dioptimasi

2. **Customisasi**:
   - Sesuaikan ukuran container
   - Atur parameter fisika (mass, friction, dll)
   - Tambahkan efek visual (shadows, lighting)

3. **Mobile Support**:
   - Tambahkan touch events
   - Optimasi untuk layar kecil
   - Atur sensitivity drag

## Troubleshooting

1. **Item tidak bergerak**:
   - Periksa physics parameters
   - Pastikan mass > 0
   - Verifikasi event handlers

2. **Performa lambat**:
   - Kurangi jumlah objects
   - Optimasi textures
   - Gunakan `useCallback` untuk event handlers

## Referensi
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Cannon.js](https://schteppe.github.io/cannon.js/) 