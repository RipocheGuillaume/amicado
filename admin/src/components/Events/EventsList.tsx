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

export const EventsList = () => (
  <List
    resource="events"
    sort={{ field: "event", order: "ASC" }}
    actions={<ListActions />}
  >
    <Datagrid>
      <TextField source="id" />
      <TextField source="event" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
