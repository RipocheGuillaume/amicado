import {
  Create,
  CreateProps,
  SimpleForm,
  TextInput,
  Toolbar,
  SaveButton,
} from "react-admin";

export const EventsCreate = (props: CreateProps) => {
  return (
    <Create {...props} redirect={"/events"}>
      <SimpleForm>
        <TextInput source="event" label="Événement" />
        <Toolbar>
          <SaveButton />
        </Toolbar>
      </SimpleForm>
    </Create>
  );
};
