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
          bg="brand.400" 
          backgroundSize={'cover'}
          backgroundPosition={'center center'}>
          <VStack
            w={'full'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
               Welcome to IsuiT NFT <br></br>
               Full-Service NFT - <br></br>
              From start to finish  
              </Text>
              <Stack direction={'row'}>
                <Button
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}>
                  Show me more
                </Button>
                <Button
                  bg={'whiteAlpha.300'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'whiteAlpha.500' }}>
                  Show me more
                </Button>
              </Stack>
            </Stack>
          </VStack>

          
        </Flex> 
      
        
    
      );
      
      
    }

    

  
  
  export default Homepage