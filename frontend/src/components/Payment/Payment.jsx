import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Accordion,
        AccordionItem,
        AccordionButton,
        AccordionPanel,
        AccordionIcon,
        Box,
        Input,
        Checkbox, CheckboxGroup, Stack,
        Radio, RadioGroup,
      
  } from '@chakra-ui/react'

  import React from 'react'
import { useNavigate } from 'react-router-dom'
  
  const  Payment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    const handleClick = ()=>
    {
      navigate("/thankyoupage")
      setTimeout(() => {
        navigate("/")
      },3000);

    }
    return (
      <>
      <h1 style={{textAlign:"center",margin:"1%"}}>Click here for Payment <Button onClick={onOpen} bg='black' colorScheme='white'>Proceed</Button></h1>
        
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              
              <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Credit Card
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Input type="text" placeholder='Enter card number' />
    <Input type="date" placeholder='MM/YYYY' />
    <Input type="text" placeholder='Enter username' />
    <Input type="password" placeholder='CVV' />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Debit Card
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Input type="text" placeholder='Enter card number' />
    <Input type="date" placeholder='MM/YYYY' />
    <Input type="text" placeholder='Enter username' />
    <Input type="password" placeholder='CVV' />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Netbanking
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <RadioGroup >
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='green' value='1' color="black">
    <img src="./images/sbi.png" alt="sbi" style={{width:"80%"}}/>
    </Radio>
    <Radio colorScheme='green' value='2'>
    <img src="./images/axis.png" alt="axis" style={{width:"60%"}}/>
    </Radio>
    <Radio colorScheme='green' value='3'>
    <img src="./images/icic.png" alt="icic" style={{width:"100%"}}/>
    </Radio>
    <Radio colorScheme='green' value='4'>
    <img src="./images/hdfc.png" alt="hdfc" style={{width:"80%"}}/>
    </Radio>
  </Stack>
</RadioGroup>
    {/* <Input type="text" placeholder='Enter card number' />
    <Input type="date" placeholder='MM/YYYY' />
    <Input type="text" placeholder='Enter username' />
    <Input type="password" placeholder='CVV' /> */}
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          UPI
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Input type="text" placeholder='Enter UPI ID' />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Cash on Delivery
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={5} direction='row'>
  <Checkbox colorScheme='green'>
    Cash on Delivery
  </Checkbox>
</Stack>
      
    </AccordionPanel>
  </AccordionItem>
</Accordion>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose} style={{backgroundColor:"black",color:"white"}}>
                Close
              </Button>
              <Button variant='ghost' style={{backgroundColor:"black",color:"white"}} onClick={handleClick}>Payment</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Payment