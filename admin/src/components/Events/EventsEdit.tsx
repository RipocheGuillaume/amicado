import { Edit, EditProps, required, SimpleForm, TextInput } from "react-admin";

export const EventsEdit = (props: EditProps) => (
  <Edit {...props} redirect={"/events"}>
    <SimpleForm>
      <TextInput source="Event" label="Evènement" validate={[required()]} />
    </SimpleForm>
  </Edit>
);
