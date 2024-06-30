import { ArcRotateCamera, Engine, Scene, Vector3 } from '@babylonjs/core'

class Game {
    constructor() {
        const canvas = document.createElement('canvas')
        canvas.style.width = '100%'
        canvas.style.height = '100%'
        canvas.id = 'gameCanvas'
        document.appendChild(canvas)
        
        const engine = new Engine(canvas, true)
        const scene = new Scene(engine)
        const camera: ArcRotateCamera = new ArcRotateCamera('camera', Math.PI, Math.PI, 1, Vector3.Zero())
        
        engine.runRenderLoop(() => {
            scene.render()
        })
    }
}