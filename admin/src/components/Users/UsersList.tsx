import {
  List,
  Datagrid,
  TextField,
  TopToolbar,
  CreateButton,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);

export const UsersList = () => (
  <List
    resource="users"
    sort={{ field: "username", order: "ASC" }}
    actions={<ListActions />}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
    </Datagrid>
  </List>
);
