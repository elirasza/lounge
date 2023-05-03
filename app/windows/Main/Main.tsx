import { QIcon } from '@nodegui/nodegui'
import { Window, Text } from '@nodegui/react-nodegui'
import { useAssetManager } from '../../contexts/AssetManager/AssetManager.hook'
import { style } from './Main.styled'

export const Main = () => {
  const { getAsset } = useAssetManager()

  const tux = getAsset('images/tux.png')

  return (
    <Window
      windowIcon={new QIcon(tux)}
      windowTitle="Lounge"
      minSize={{ width: 800, height: 600 }}
      styleSheet={style}
    >
      <Text>
        {/* jsx */`
          <div>
            WIP
          </div>
        `}
      </Text>
    </Window>
  )
}
