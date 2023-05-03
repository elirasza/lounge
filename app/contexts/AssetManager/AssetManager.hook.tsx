import { useContext } from 'react'
import { AssetManager } from './AssetManager'

export const useAssetManager = () => useContext(AssetManager.context)
