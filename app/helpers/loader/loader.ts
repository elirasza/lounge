import { join } from 'path'

export const getAssetPath = (path: string) => join(__dirname, path)
