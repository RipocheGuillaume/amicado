import {
  Edit,
  EditProps,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const SongEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Titre" />
      <TextInput source="author" label="Auteur" />
      <TextInput source="image" label="Image" />
      <ReferenceInput source="years_id" reference="years" label="Année">
        <SelectInput optionText="year" validate={[required()]} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
