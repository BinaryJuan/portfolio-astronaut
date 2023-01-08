import './ThreeModel.css'
import * as THREE from 'three'
import { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'

const ThreeModel = () => {
    const annotations = [
        {
            name: 'Quinta Silveria',
            x: 0,
            y: 0,
            z: 0,
            distanceX: -7,
            distanceY: 4,
            distanceZ: 0
        },
        {
            name: 'Broken Chains',
            x: 0,
            y: 0,
            z: 0,
            distanceX: 5,
            distanceY: 1,
            distanceZ: 0
        },
        {
            name: 'Speedfire',
            x: 0,
            y: 0,
            z: 0,
            distanceX: -3,
            distanceY: 3,
            distanceZ: 0
        },
        {
            name: 'JUAN1',
            x: 0,
            y: 0,
            z: 0,
            distanceX: -8,
            distanceY: 2,
            distanceZ: 0
        },
        {
            name: 'JUAN2',
            x: 0,
            y: 0,
            z: 0,
            distanceX: -9,
            distanceY: -4,
            distanceZ: 0
        }
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
            addLabels()
        })
        // Labels
        const labelRenderer = new CSS2DRenderer()
        labelRenderer.setSize(window.innerWidth, window.innerHeight)
        labelRenderer.domElement.style.position = 'absolute'
        labelRenderer.domElement.style.top = 0
        document.getElementById('threeModel').appendChild(labelRenderer.domElement)
        // function to add labels to the scene
        const labels = []
        const addLabels = () => {
            annotations.forEach((annotation) => {
                const p = document.createElement('p')
                p.textContent = annotation.name
                p.style.color = 'white'
                const div = document.createElement('div')
                div.className = 'annotationContainer'
                div.id = annotation.name
                div.appendChild(p)
                const divContainer = new CSS2DObject(div)
                // convert the label coordinates to world coordinates
                const worldCoordinates = model.localToWorld(new THREE.Vector3(annotation.x, annotation.y, annotation.z))
                divContainer.position.set(worldCoordinates.x, worldCoordinates.y, worldCoordinates.z)
                // add to the div container distanceX, distanceY, distanceZ
                divContainer.distanceX = annotation.distanceX
                divContainer.distanceY = annotation.distanceY
                divContainer.distanceZ = annotation.distanceZ
                // add the label to the scene
                scene.add(divContainer)
                labels.push(divContainer)
            })
        }
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
                labels.forEach((label) => {
                    // Update the position of the label
                    const distanceX = label.distanceX
                    const distanceY = label.distanceY
                    const distanceZ = label.distanceZ
                    const speedFactor = 3
                    const labelX = model.position.x + distanceX * Math.sin(model.rotation.y * speedFactor)
                    const labelY = model.position.y + distanceY * Math.cos(model.rotation.y * speedFactor)
                    const labelZ = model.position.z + distanceZ * Math.sin(model.rotation.z * speedFactor)
                    label.position.set(labelX, labelY, labelZ)
                    // Update the matrix of the label
                    label.updateMatrix()
                })
            }
            // render
            labelRenderer.render(scene , camera)
            renderer.render(scene, camera)
            renderer.setClearColor(0x000000, 0)
        }
        // window.addEventListener('resize', () => {
        //     camera.aspect = window.innerWidth / window.innerHeight
        //     camera.updateProjectionMatrix()
        //     renderer.setSize(window.innerWidth, window.innerHeight)
        //     labelRenderer.setSize(window.innerWidth, window.innerHeight)
        // })
        animate()
    })

    return (
        <div id='threeModel'>
            <canvas id='bg'></canvas>
        </div>
    )
}

export default ThreeModel
