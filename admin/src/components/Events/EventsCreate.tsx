import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";

export const EventsCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="event" label="Evenement" />
    </SimpleForm>
  </Create>
);
