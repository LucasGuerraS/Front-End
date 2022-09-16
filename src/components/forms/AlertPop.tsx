import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

//Component that will be used to create an alert pop up when form validation fails

interface PropsType {
  title: any;
}

const AlertPop = ({ title }: PropsType) => {
  return (
    <Alert
      status="error"
      borderRadius={10}
      backgroundColor={"transparent"}
      color={"red"}
      ml={"2rem"}
    >
      <AlertIcon />
      <AlertTitle fontSize={13}>{title}</AlertTitle>
    </Alert>
  );
};

export default AlertPop;
