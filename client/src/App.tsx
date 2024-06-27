//import { Button } from '@chakra-ui/react'
import { Stack, Container } from '@chakra-ui/react'
import Navbar from "./components/Navbar.tsx"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

//export const BASE_URL = "http://localhost:5000/api"
export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {

  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>

    /*<>
      <Button>Hello</Button>
    </>*/


  )
}

export default App
