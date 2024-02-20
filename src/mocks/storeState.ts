export const mockSearchApi = {
    queries: {
        search: {
            status: "fulfilled",
            endpointName: "search",
            requestId: "_Cnt6U2FWqVWaOyHVyE3P",
            originalArgs: {
              page: 1
            },
            startedTimeStamp: 1671098655926,
            data: {
              info: {
                count: 826,
                pages: 42,
                next: "https://rickandmortyapi.com/api/character?page=2",
                prev: null
              },
              results: [
                {
                  id: 1,
                  name: "Rick Sanchez",
                  status: "Alive",
                  species: "Human",
                  type: "",
                  gender: "Male",
                  origin: {
                    name: "Earth (C-137)",
                    url: "https://rickandmortyapi.com/api/location/1"
                  },
                  location: {
                    name: "Citadel of Ricks",
                    url: "https://rickandmortyapi.com/api/location/3"
                  },
                  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                  episode: [
                    "https://rickandmortyapi.com/api/episode/1",
                    "https://rickandmortyapi.com/api/episode/2",
                    "https://rickandmortyapi.com/api/episode/3",
                    "https://rickandmortyapi.com/api/episode/4",
                    "https://rickandmortyapi.com/api/episode/5",
                  ],
                  url: "https://rickandmortyapi.com/api/character/1",
                  created: "2017-11-04T18:48:46.250Z"
                },
              ]
            },
            fulfilledTimeStamp: 1671098655937
          }
    }
}

export const mockProfileHistorySlice = {
    profileVisitedHistory: [1]
}