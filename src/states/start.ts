import { ArcRotateCamera, Scene, Vector3 } from '@babylonjs/core';
import { Game } from '../app'

export async function start(this: Game, canvas: HTMLCanvasElement, scene: Scene) {
    const camera: ArcRotateCamera = new ArcRotateCamera('camera', Math.PI, Math.PI, 1, Vector3.Zero())
        camera.attachControl(true)      
}