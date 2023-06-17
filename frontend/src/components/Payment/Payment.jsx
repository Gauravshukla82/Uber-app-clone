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
      
  } from '@chakra-ui/react'

  import React from 'react'
  
  const  Payment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
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
      cash on delivery
    </AccordionPanel>
  </AccordionItem>
</Accordion>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose} style={{backgroundColor:"black",color:"white"}}>
                Close
              </Button>
              <Button variant='ghost' style={{backgroundColor:"black",color:"white"}} >Payment</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Payment