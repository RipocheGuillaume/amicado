import simpleRestProvider from "ra-data-simple-rest";

export const dataProvider = simpleRestProvider(
  import.meta.env.VITE_SIMPLE_REST_URL,
);

// const customDataProvider = {
//   ...dataProvider,

//   // Récupère une chanson spécifique avec l'ID
//   getOne: (resource: string, params: GetOneParams) => {
//     if (resource === "song") {
//       return fetch(`http://localhost:300/song/${params.id}`, {
//         method: "GET",
//       })
//         .then((response) => response.json())
//         .then((data) => ({ data }));
//     }

//     return dataProvider.getOne(resource, params);
//   },

//   // Récupère une voix spécifique basée sur l'année et l'ID de la chanson
//   getMany: (resource: string, params: GetManyParams) => {
//     if (resource === "voice") {
//       const { id_years, id_song } = params.ids[0]; // Assumons que params.ids contient un objet avec id_years et id_song

//       return fetch(`http://localhost:3000/voice/${id_years}/${id_song}`, {
//         method: "GET",
//       })
//         .then((response) => response.json())
//         .then((data) => ({ data: [data] }));
//     }

//     return dataProvider.getMany(resource, params);
//   },

//   // Personnalise la liste des chansons avec pagination et tri si nécessaire
//   getList: (resource: string, params: any) => {
//     if (resource === "song") {
//       const { page, perPage } = params.pagination;
//       const { field, order } = params.sort;

//       const url = `http://localhost:300/song?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`;

//       return fetch(url, {
//         method: "GET",
//       }).then((response) => {
//         const total = parseInt(
//           response.headers.get("X-Total-Count") ?? "0",
//           10,
//         );
//         return response.json().then((data) => ({ data, total }));
//       });
//     }

//     return dataProvider.getList(resource, params);
//   },

//   // Ajoutez d'autres méthodes personnalisées si nécessaire (create, update, delete, etc.)
// };

// export default customDataProvider;
