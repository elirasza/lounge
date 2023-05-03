import { createElement, createContext, ReactChild } from 'react'

export const createContextProvider = <T>(hook: () => T) => {
  const context = createContext<ReturnType<typeof hook>>({} as T)

  return {
    context,
    Provider: ({ children }: { children: ReactChild }) => createElement(context.Provider, { value: hook() }, children),
  }
}
