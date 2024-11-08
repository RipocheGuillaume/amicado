import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { YearsList } from "./components/Years/YearsList";
import { UsersList } from "./components/Users/UsersList";
import { YearsCreate } from "./components/Years/YearsCreate";
import { SongList } from "./components/Song/SongList";
import { dataProvider } from "./dataProvider";
import { SongCreate } from "./components/Song/SongCreate";
import { SongEdit } from "./components/Song/SongEdit";
import { YearsEdit } from "./components/Years/YearsEdit";
import { VoiceList } from "./components/Voice/VoiceList";
import { VoiceCreate } from "./components/Voice/VoiceCreate";
import { VoiceEdit } from "./components/Voice/VoiceEdit";
import { EventsList } from "./components/Events/EventsList";
import { EventsCreate } from "./components/Events/EventsCreate";
import { EventsEdit } from "./components/Events/EventsEdit";
import { PicturesList } from "./components/Pictures/PicturesList";
import { PicturesCreate } from "./components/Pictures/PicturesCreate";
import { PicturesEdit } from "./components/Pictures/PicturesEdit";

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
    <Resource
      name="events"
      list={EventsList}
      create={EventsCreate}
      edit={EventsEdit}
    />

    <Resource
      name="pictures"
      list={PicturesList}
      create={PicturesCreate}
      edit={PicturesEdit}
    />

    <Resource name="users" list={UsersList} />
  </Admin>
);
