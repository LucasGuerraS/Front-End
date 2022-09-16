import { Checkbox, FormControl, HStack, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { UserProps } from "../../../types/UserProfilesTypes";
import {
  ProfDesign,
  UserWrapper,
  UserMargin,
  ProfilePic,
  BottomBorder,
} from "./stylesProfilesUser";
import img from "../../../assets/suits.jpg";
import { Controller, useFormContext } from "react-hook-form";

const ProfilesUsers: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const { control } = useFormContext();
  return (
    <ProfDesign>
      {users.map((item: UserProps) => (
        <BottomBorder key={`${item.description} ${item.name}`}>
          <HStack>
            <ProfilePic src={img} />
            <UserWrapper>
              <UserMargin>
                <p>{item.name}</p>
                <p>{`${item.idade} anos`}</p>
                <p>{item.description}</p>
                <HStack>
                  {item.competences.map((comp: string) => (
                    <div key={`${item.description} ${comp}`}>{comp}</div>
                  ))}
                </HStack>
              </UserMargin>
            </UserWrapper>
            <FormControl>
              <HStack ml={"3rem"}>
                <Controller
                  control={control}
                  name={`${item.id}`}
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
        </BottomBorder>
      ))}
    </ProfDesign>
  );
};

export default ProfilesUsers;
