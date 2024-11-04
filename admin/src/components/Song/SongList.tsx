import {
  List,
  Datagrid,
  TextField,
  TopToolbar,
  CreateButton,
  DeleteButton,
  EditButton,
  ReferenceField,
  ArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);

export const SongList = () => (
  <List
    resource="song"
    sort={{ field: "title", order: "ASC" }}
    actions={<ListActions />}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="author" />
      <TextField source="image" />
      <TextField source="year" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
