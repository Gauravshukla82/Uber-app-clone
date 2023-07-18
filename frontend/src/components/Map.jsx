import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import "./Map.css";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
import Car from "./Map/Car";

const center = { lat: 26.8467, lng: 80.9462 };

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCelkvj4fMod8CkhjPDQegdfuL72QEvzK8",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [ride, setRide] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const toast = useToast();

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute(e) {
    e.preventDefault();
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setRide(!ride);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }
  const handleOriginInput = (e) => {
    setOrigin(e.target.value);
    setDestination(e.target.value);
  };
  const handleDestinationInput = (e) => {
    setDestination(e.target.value);
  };
  const handleDriverArrival = () => {
    // Show toast notification
    toast({
      title: "Driver Arrival",
      description: "The driver will reach you in 5 minutes.",
      status: "info",
      duration: 10000,
      position: "top-left",
      isClosable: true,
    });
  };
  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="70vh"
      w="65vw"
      border="1px solid"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          // options={{
          //   zoomControl: false,
          //   streetViewControl: false,
          //   mapTypeControl: false,
          //   fullscreenControl: false,
          // }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        position="absolute"
        left={-460}
        top={-31}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="400"
        zIndex="1"
      >
        <div className="formdiv">
          <h2>Request Ride Now</h2>
          <form action="">
            <br />
            <b>
              <label htmlFor="currnt location">Origin</label>
            </b>
            <br />
            <Autocomplete>
              <b>
                <input
                  type="text"
                  placeholder="From"
                  ref={originRef}
                  onChange={handleOriginInput}
                />
              </b>
            </Autocomplete>
            <br />
            <label htmlFor="destination">Destination</label>
            <br />
            <Autocomplete>
              <input
                type="text"
                placeholder="Where To ?"
                ref={destinationRef}
                onChange={handleDestinationInput}
              />
            </Autocomplete>
            <br />
            <br />
            <ButtonGroup>
              <Button
                color="white"
                bg="#000"
                type="submit"
                onClick={calculateRoute}
              >
                Calculate Route
              </Button>

              <IconButton
                aria-label="center back"
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </ButtonGroup>
            {/* <button className="button" type="submit" onClick={calculateRoute}>
              Search For Cars
            </button> */}
            {ride ? (
              <Car
                distance={distance}
                origin={origin}
                destination={destination}
              />
            ) : null}
          </form>
        </div>
        {/* <HStack spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="Destination"
                ref={destinationRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            
              <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
                Calculate Route
              </Button>

            <IconButton
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack> */}
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label="center back"
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
          />
        </HStack>
          <Button onClick={handleDriverArrival}>Notify Driver Arrival</Button>
      </Box>
    </Flex>
  );
}

export default Map;
