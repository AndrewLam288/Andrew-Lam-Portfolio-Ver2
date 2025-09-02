import useLocalStorage from './useLocalStorage'
export default function useTheme() {
  const [mode, setMode] = useLocalStorage('theme', 'dark')
  const toggle = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'))
  return { mode, toggle }
}
