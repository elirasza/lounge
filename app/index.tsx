import { Renderer } from '@nodegui/react-nodegui'
import { AssetManager } from './contexts/AssetManager/AssetManager'
import { Main } from './windows/Main/Main'

process.title = 'Lounge'

Renderer.render(<AssetManager.Provider><Main /></AssetManager.Provider>)
