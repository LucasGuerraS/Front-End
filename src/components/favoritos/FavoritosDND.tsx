import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import columnsFromBackend from "./Colunas";
import {
  ContentWrapper,
  ItemsWrapper,
  DraggableStyle,
  InnerWrapper,
  ButtonWrapper
} from "./styleFavoritosDND";
import UserCard from "./userCard/UserCard";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@chakra-ui/react";
import { ColumnsProps } from "../../types/UserColumnsTypes";

const FavoritosDND = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

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
        <ButtonWrapper>

        <ContentWrapper>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div key={columnId}>
                  <InnerWrapper>
                    <h2>{column.name}</h2>
                    <div style={{ margin: "0.5rem" }}>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            }}
                            >
                              <ItemsWrapper>
                                {column.items.map((item , index) => {
                                  return (
                                    <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                    >
                                      {(provided, snapshot) => {
                                        return (
                                          <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: "none",
                                            backgroundColor:
                                            snapshot.isDragging
                                            ? "#263B4A"
                                            : "#456C86",
                                            color: "white",
                                            ...provided.draggableProps.style,
                                          }}
                                          >
                                            <DraggableStyle>
                                              <UserCard userInfo={item} />
                                            </DraggableStyle>
                                          </div>
                                        );
                                      }}
                                    </Draggable>
                                  );
                                })}
                                {provided.placeholder}
                              </ItemsWrapper>
                            </div>
                          );
                        }}
                      </Droppable>
                    </div>
                  </InnerWrapper>
                </div>
              );
            })}
          </DragDropContext>
        </ContentWrapper>
        <Button
          outline="none"
          bg="#1056E1"
          type="submit"
          width={"71rem"}
          >
          Share selected users
        </Button>
          </ButtonWrapper>
      </form>
    </FormProvider>
  );
};

export default FavoritosDND;
