// import React from 'react'

// const UserCard = (props: any) => {
//   return (
//     <div>{props.userInfo.content.name}</div>
//   )
// }

// export default UserCard

import { Checkbox, FormControl, HStack, Input, VStack } from "@chakra-ui/react";
import React from "react";
import {
  ProfDesign,
  UserWrapper,
  UserMargin,
  ProfilePic,
} from "./styleUserCard";
import img from "../../../assets/suits.jpg";
import { Controller, useFormContext } from "react-hook-form";
import { ColumnsProps } from "../../../types/UserColumnsTypes";

const UserCard: React.FC<{userInfo: ColumnsProps}> = (props) => {
  const { control } = useFormContext();
  return (
    <ProfDesign>
          <HStack>
            <ProfilePic src={img} />
            <UserWrapper>
              <UserMargin>
                <p>{props.userInfo.content.name}</p>
                <p>{`${props.userInfo.content.idade} anos`}</p>
                <p>{props.userInfo.content.description}</p>
              </UserMargin>
            </UserWrapper>
            <FormControl>
              <HStack ml={"3rem"}>
                <Controller
                  control={control}
                  name={`${props.userInfo.id}`}
                  defaultValue={false}
                  render={({ field: { onChange, value, ref } }) => (
                    <Checkbox
                      onChange={onChange}
                      textTransform="capitalize"
                      ref={ref}
                      isChecked={value}
                    >
                      Selecionar user
                    </Checkbox>
                  )}
                />
              </HStack>
            </FormControl>
          </HStack>
    </ProfDesign>
  );
};

export default UserCard;
