import { Edit, EditProps, SimpleForm, TextInput } from "react-admin";

export const YearsEdit = (props: EditProps) => (
  <Edit {...props} redirect={"/years"}>
    <SimpleForm>
      <TextInput source="year" label="Year" />
    </SimpleForm>
  </Edit>
);
