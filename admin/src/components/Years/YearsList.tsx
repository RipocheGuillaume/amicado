import {
  List,
  Datagrid,
  TextField,
  TopToolbar,
  CreateButton,
  EditButton,
  DeleteButton,
  SingleFieldList,
  ChipField,
  ArrayField,
} from "react-admin";
import { useNavigate } from "react-router-dom";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);

export const YearsList = () => {
  const navigate = useNavigate();
  return (
    <List
      resource="years"
      sort={{ field: "year", order: "ASC" }}
      actions={<ListActions />}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="year" />
        <ArrayField source="songs" label="Chansons associées">
          <SingleFieldList>
            <ChipField source="title" />
          </SingleFieldList>
        </ArrayField>

        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
