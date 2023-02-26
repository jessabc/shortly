import { useState, createContext } from "react"

// this context is to provide a useState boolean for to show if menu visible for mobile

export type ContextType = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<null | ContextType>(null);

type ContextProviderProps = {
  children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const value = {
    isVisible,
    setIsVisible,
  }

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}

