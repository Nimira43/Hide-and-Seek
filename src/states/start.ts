import { ArcRotateCamera, Engine, Scene, Vector3 } from '@babylonjs/core'
import { AdvancedDynamicTexture, Rectangle } from '@babylonjs/gui'
import { Game } from '../app'

export async function start(this: Game, canvas: HTMLCanvasElement, engine: Engine, scene: Scene) {
    const camera: ArcRotateCamera = new ArcRotateCamera('camera', Math.PI, Math.PI, 1, Vector3.Zero())
    camera.attachControl(true)   
    
    scene.detachControl()
    engine.displayLoadingUI()
    let sceneToLoad = new Scene(engine)

    const guiMenu = AdvancedDynamicTexture.CreateFullscreenUI('ui', true, scene)
    const background = new Rectangle('background')
    background.color = '#9dc9b5'
    background.background = '#9dc9b5'
    
    guiMenu.addControl(background)
    await scene.whenReadyAsync()
    sceneToLoad.attachControl()
    engine.hideLoadingUI()
    scene.dispose()
}