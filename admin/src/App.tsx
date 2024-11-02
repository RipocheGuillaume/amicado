import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { YearsList } from "./components/List/Years/YearsList";
import { UsersList } from "./components/Users/UsersList";
import { YearsCreate } from "./components/List/Years/YearsCreate";
import { SongList } from "./components/Song/SongList";
import { dataProvider } from "./dataProvider";
import { SongCreate } from "./components/Song/SongCreate";
import { SongEdit } from "./components/Song/SongEdit";
import { YearsEdit } from "./components/List/Years/YearsEdit";
import { VoiceList } from "./components/List/Voice/VoiceList";
import { VoiceCreate } from "./components/List/Voice/VoiceCreate";
import { VoiceEdit } from "./components/List/Voice/VoiceEdit";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="years"
      list={YearsList}
      create={YearsCreate}
      edit={YearsEdit}
    />
    <Resource name="song" list={SongList} create={SongCreate} edit={SongEdit} />
    <Resource
      name="voice"
      list={VoiceList}
      create={VoiceCreate}
      edit={VoiceEdit}
    />

    <Resource name="users" list={UsersList} />
  </Admin>
);
