import { FlexProps, Box, Container, List, ListItem, Icon } from '@chakra-ui/react'
import { AiFillFacebook } from "react-icons/ai"

const Footer = (props: FlexProps) => (
    <Box as="footer" bg="blue.900" color="white" >
      <Container maxW="container.xl" justifyContent="space-between" d="flex" py="2rem" {...props} >
        <Box>Harte Code</Box>
        <List d="flex" spacing={3} my={0}>
          <ListItem >
            <Icon as={AiFillFacebook} />
          </ListItem>
          <ListItem></ListItem>
        </List>
      </Container>
    </Box>
)

export default Footer