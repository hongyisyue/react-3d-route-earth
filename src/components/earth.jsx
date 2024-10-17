import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { TrackballControls } from "@react-three/drei";

import EarthCloudsMap from "./assets/textures/8k_earth_clouds.jpg";
import EarthDayMap from "./assets/textures/8k_earth_daymap.jpg"
import EarthNormalMap from "./assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "./assets/textures/8k_earth_specular_map.jpg";
export function Earth(params) {
    /** refs */
    let cloudsRef = useRef();
    let earthRef = useRef();

    const content = params.content;
    const isEnter = params.isEnter;
    const r = params.earth_r || DefaultSettings.earth_r;
    const horSegment = 64;
    const verSegment = 64;

    /** Textures */
    const [cloudsMap] = useLoader(
        THREE.TextureLoader,
        [EarthCloudsMap]
    );
    const [dayMap, normalMap, specularMap] = useLoader(
        TextureLoader,
        [EarthDayMap, EarthNormalMap, EarthSpecularMap]
    );

    /** Animation */
    useFrame(() => {
        if (!isEnter) {
            cloudsRef.current.rotation.y += 0.005;
        }
    });

    return (
        <mesh ref={cloudsRef} position={[2, 0, 0]}>
            <TrackballControls />
            <sphereGeometry args={[r + 0.05, horSegment, verSegment]} />
            <meshPhongMaterial
                map={cloudsMap}
                opacity={0.45}
                depthWrite={true}
                transparent={true}
                side={THREE.DoubleSide}
            />
            <mesh ref={earthRef} position={[0, 0, 0]}>
            <sphereGeometry args={[r, horSegment, verSegment]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial
                map={dayMap}
                normalMap={normalMap}
                metalness={0.6}
                roughness={0.5}
            />
                {content}
            </mesh>
        </mesh>
    )
}