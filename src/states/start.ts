import { ArcRotateCamera, Engine, Scene, Vector3 } from '@babylonjs/core'
import { AdvancedDynamicTexture, Image, Rectangle, Control, Button } from '@babylonjs/gui'
import { Game, Status } from '../app'

export async function start(this: Game, canvas: HTMLCanvasElement, engine: Engine, status: Status) {
    
    status._scene.detachControl()
    engine.displayLoadingUI()

    let sceneToLoad = new Scene(engine)
    const guiMenu = AdvancedDynamicTexture.CreateFullscreenUI('ui', true, sceneToLoad)
    
    const background = new Rectangle('background')
    background.color = '#87ceeb'
    background.background = '#87ceeb'
    guiMenu.addControl(background)

    const titleImg = new Image('logoTitle', 'assets/textures/UI/logo.svg')
    titleImg.height = 0.3;
    titleImg.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    titleImg.top = (window.innerHeight / 10)
    guiMenu.addControl(titleImg)

    const playBtn = Button.CreateSimpleButton('playBtn', "Play") 
    const fontSizePercentage = 0.05;
    playBtn.color = 'orangered'
    playBtn.fontFamily = 'bongkar'
    playBtn.fontSizeInPixels = ((window.innerHeight + window.innerWidth) / 2) * fontSizePercentage
    playBtn.height = 0.12
    playBtn.width = 0.24
    playBtn.top = -(window.innerWidth / 10)
    playBtn.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM
    guiMenu.addControl(playBtn)

    const camera: ArcRotateCamera = new ArcRotateCamera('camera', Math.PI, Math.PI, 1, Vector3.Zero(), sceneToLoad)
    camera.attachControl(true) 

    

    await sceneToLoad.whenReadyAsync()
    sceneToLoad.attachControl()
    engine.hideLoadingUI()
    status._scene.dispose()
    status._scene = sceneToLoad
}