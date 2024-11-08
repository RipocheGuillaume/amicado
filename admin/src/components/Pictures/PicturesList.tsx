import {
  List,
  Datagrid,
  TextField,
  TopToolbar,
  CreateButton,
  DeleteButton,
  EditButton,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);

export const PicturesList = () => (
  <List
    resource="pictures"
    sort={{ field: "title", order: "ASC" }}
    actions={<ListActions />}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="url" />
      <TextField source="event" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
