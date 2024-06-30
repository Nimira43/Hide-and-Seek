import { Engine, Scene } from '@babylonjs/core'
import { start } from './states/start'

enum State {
    START = 0,
    MAIN_MENU = 1,
    SOLO_MENU = 2,
    MULTI_MENU = 3,
    OPTIONS = 4,
    GAME_SOLO = 5,
    GAME_MULTI = 6,
    LOSE = 7,
    WIN = 8
}

export class Game {
    private _canvas: HTMLCanvasElement
    private _engine: Engine
    private _scene: Scene
    private _state: number = 0
    protected _start = start

    constructor() {
        this.createCanvas()
        this.initialize()
    }

    private createCanvas(): void {
        document.documentElement.style['overflow'] = 'hidden'
        document.documentElement.style.overflow = 'hidden'
        document.documentElement.style.width = '100%'
        document.documentElement.style.height = '100%'
        document.documentElement.style.margin = '0'
        document.documentElement.style.padding = '0'
        document.body.style.overflow = 'hidden'
        document.body.style.width = '100%'
        document.body.style.height = '100%'
        document.body.style.margin = '0'
        document.body.style.padding = '0'

        this._canvas = document.createElement('canvas')
        this._canvas.style.width = '100%'
        this._canvas.style.height = '100%'
        this._canvas.id = 'gameCanvas'
        document.body.appendChild(this._canvas)
    }

    private initialize(): void {
        this._engine = new Engine(this._canvas, true)
        this._scene = new Scene(this._engine)
        this.main()
    }

    private main(): void {
        this._start(this._canvas, this._scene)
        this._engine.runRenderLoop(() => {
            switch (this._state) {
                case State.START:
                    this._scene.render()
                    break
                default: break
            }
            this._scene.render()
        })
    }
}

new Game()