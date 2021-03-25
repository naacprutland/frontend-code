import { useColorMode, Switch } from '@chakra-ui/react'

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}

export default DarkModeSwitch