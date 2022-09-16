import { StepsStyleConfig as Steps } from "chakra-ui-steps";



const CustomSteps = {
    ...Steps,
    baseStyle: (props: any) => {
      return {
        ...Steps.baseStyle(props),
        icon: {
          ...Steps.baseStyle(props).icon,
          // your custom styles here
          strokeWidth: '1px',
        },
        label: {
          ...Steps.baseStyle(props).label,
          color: "white"
        },
        iconLabel: {
          ...Steps.baseStyle(props).labelContainer,
          color: "black"
        }
      };
    },
  };

  export default CustomSteps