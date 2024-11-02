import {
  List,
  Datagrid,
  TextField,
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
  ReferenceField,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);

export const VoiceList = () => (
  <List
    resource="voice"
    sort={{ field: "voice", order: "ASC" }}
    actions={<ListActions />}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="voice" />
      <TextField source="link" />
      <ReferenceField source="song_id" reference="song" label="Chanson">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="years_id" reference="years" label="Année">
        <TextField source="year" />
      </ReferenceField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
