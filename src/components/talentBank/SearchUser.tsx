import React, { useState, useEffect } from "react";
import { SearchWrapper } from "./styleSearch";
import { Button } from "@chakra-ui/react";
import ProfilesUsers from "./profiles/ProfilesUsers";
import { Profiles } from "./profiles/ProfilesArray";
import { useForm, FormProvider } from "react-hook-form";

const SearchUser = () => {
  let users: Array<any> = [];
  const [selectedUsers, setUsers] = useState([[]]);
  const methods = useForm();
  const onSubmit = (data: any) => {
    Object.entries(data).map((item) => {
      users.push(item);
    });
    setUsers(users);
  };

  useEffect(() => {
    if (selectedUsers.length > 2) {
      for (const key in selectedUsers) {
        if (selectedUsers[key][1]) {
          console.log(selectedUsers[key][0]);
        }
      }
    }
  }, [selectedUsers]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SearchWrapper>
          <ProfilesUsers users={Profiles} />
        </SearchWrapper>
        <Button
          outline="none"
          bg="#1056E1"
          type="submit"
          ml={"4rem"}
          width={"45rem"}
        >
          Send to favorites
        </Button>
      </form>
    </FormProvider>
  );
};

export default SearchUser;
