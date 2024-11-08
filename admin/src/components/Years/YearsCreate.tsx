import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";

export const YearsCreate = (props: CreateProps) => (
  <Create {...props} redirect={"/years"}>
    <SimpleForm>
      <TextInput source="year" label="Year" />
    </SimpleForm>
  </Create>
);
