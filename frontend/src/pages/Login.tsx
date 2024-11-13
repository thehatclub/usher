import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "@/components/ui/file-button";
import { Box, Button, HStack } from "@chakra-ui/react";
import { BellElectric, DoorOpen } from "lucide-react";

const Login = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="100vh" // Full height of the viewport
      >
        <Box
          borderWidth={"10px"}
          borderColor={"gray.700"}
          p={"50px"}
          borderRadius={"10px"}
          bgColor={"gray.900"}
          justifyItems={"center"}
        >
          <FileUploadRoot
            maxW="xl"
            alignItems="stretch"
            maxFiles={1}
            accept={"application/json"}
          >
            <FileUploadDropzone
              label="Drag and drop here to upload"
              description="Usher formatted .json"
            />
            <FileUploadList />
          </FileUploadRoot>
          <HStack mt={4}>
            <Button bgColor={"yellow.400"}>
              <DoorOpen />
              Load File
            </Button>
            <Button bgColor={"red.400"}>
              <BellElectric />
              Try Fail-safe
            </Button>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Login;
