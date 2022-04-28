import { FormControl, 
  FormLabel, 
  Input, 
  Container, 
  Flex, 
  Heading, 
  Text, 
  VStack, 
  GridItem, 
  SimpleGrid, 
  Select,
  Button,
  Checkbox,
  HStack,
  Image, 
  AspectRatio,
  useColorMode,
  Stack,
  useBreakpointValue,
  } from '@chakra-ui/react'
  import { PhoneIcon, AddIcon, MoonIcon } from '@chakra-ui/icons'
import Header from '../Components/Header';

function Homepage() {
  const { toggleColorMode} = useColorMode ();
  return ( 

        <Flex
          w="full"
          h={{base: 'auto', sm: '100vh'}}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}>
          <Container>

   

          </Container>
          <VStack
            w={'full'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            >
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
              <Text
                color={'black'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
               Welcome to IsuiT NFT <br></br>
               Full-Service NFT - <br></br>
              From start to finish  
              </Text>
              <Stack direction={'row'}>
                <Button
                  bg={'brand.500'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'black' }}>
                  Show me more
                </Button>
                <Button
                  bg={'brand.500'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'black' }}>
                  Show me more
                </Button>
              </Stack>
            </Stack>
          </VStack>

          
        </Flex> 
      
        
    
      );
      
      
    }

    

  
  
  export default Homepage