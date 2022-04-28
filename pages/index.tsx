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
  Divider,
  Grid,
  } from '@chakra-ui/react'
  import image from 'public/IsuiT NFT logo.png'
  import { PhoneIcon, AddIcon, MoonIcon } from '@chakra-ui/icons'
import Header from '../Components/Header';

function Homepage() {
  const { toggleColorMode} = useColorMode ();
  return ( 

       
          <Flex h={{base: 'auto', md: '50vh'}} py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row'}}> 
  
         <Container>
          <Image boxSize='sm' src='/IsuiT NFT logo.png' alt='IsuiT Logo' verticalAlign="center"/>
          </Container>
          <VStack
            w={'full'}
            justify={'flex-end'}
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
            
          
         
                <Button
                  bg={'brand.500'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'black' }}>
                 Get Started Today
                </Button>
             
       
            </Stack>
          </VStack>
        
</Flex>







   
        
    
      );
      
      
    }

    

  
  
  export default Homepage