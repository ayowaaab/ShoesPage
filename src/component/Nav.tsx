import { Grid ,Button} from "@chakra-ui/react"

function Nav() {
  return (
    <>
    <Grid p={5} templateColumns={{base:"1fr",sm:"repeat(2,1fr)",md:"repeat(2,1fr)",xl:"repeat(4,1fr)"}} gap={2}>
        <Button>contact</Button>
        <Button>Products</Button>
        <Button>List</Button>
        <Button>Banana</Button>
    </Grid>

    </>
  )
}

export default Nav