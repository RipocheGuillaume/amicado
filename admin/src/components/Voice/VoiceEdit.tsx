import {
  Edit,
  EditProps,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const VoiceEdit = (props: EditProps) => (
  <Edit {...props} redirect={"/voice"}>
    <SimpleForm>
      <TextInput source="voice" label="Voix" />
      <TextInput source="link" label="Lien" />
      <ReferenceInput source="song_id" reference="song" label="Chanson">
        <SelectInput optionText="title" validate={[required()]} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
