import { useState, useEffect, useMemo } from 'react'
import { join } from 'path'
import { createContextProvider } from '../../helpers/context/context'
import { replaceStart } from '../../helpers/string/string'

const loader = require.context('../../assets', true)

export const AssetManager = createContextProvider(() => {
  const [assets, setAssets] = useState<Record<string, string>>({})

  const loadAssets = async () => setAssets(Object.fromEntries(loader.keys().map((p) => [replaceStart(p, './'), join(__dirname, loader(p).default)])))

  const getAsset = (key: string) => assets[key]

  useEffect(() => {
    loadAssets()
  }, [])

  return useMemo(() => ({ getAsset }), [assets])
})
