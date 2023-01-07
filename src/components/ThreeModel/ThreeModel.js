import './ThreeModel.css'
import * as THREE from 'three'
import { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const ThreeModel = () => {
    const annotations = [
        {
            name: 'Asteroid1',
            x: 15.5,
            y: 7,
            z: 25
        },
        {
            name: 'Asteroid2',
            x: 0,
            y: 0,
            z: 25
        },
    ]
    useEffect(() => {
        // Setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg')})
        renderer.setSize(1500, 1000)
        renderer.setPixelRatio(window.devicePixelRatio)
        camera.position.setZ(15)
        // Load model
        const loader = new GLTFLoader()
        let model = new THREE.Object3D()
        loader.load('media/scene.gltf', (gltf) => {
            // add the model to the scene
            model = gltf.scene
            model.position.set(-6, 6.1, 0)
            model.scale.set(0.55, 0.55, 0.55)
            model.position.x += 10
            model.renderOrder = 0
            scene.add(model)
        })
        // Lights (simulating the sun from the left)
        const pointLight = new THREE.PointLight(0xffffff)
        pointLight.position.set(10, 10, 10)
        const ambientLight = new THREE.AmbientLight(0xffffff)
        scene.add(pointLight, ambientLight)
        // Animate
        const animate = () => {
            requestAnimationFrame(animate)
            if (model) {
                model.rotation.y += 0.001
            }
            // render
            renderer.render(scene, camera)
            renderer.setClearColor(0x000000, 0)
        }
        animate()
    })

    return (
        <div id='threeModel'>
            <canvas id='bg'></canvas>
        </div>
    )
}

export default ThreeModel
