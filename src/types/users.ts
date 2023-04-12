export interface users {
    gender: "male" | "female";
    name: {
      first: string;
      last: string;
    },
    location: {
      city: string;
      state: string;
      country: string;
    }
    email: string;
    login: {
      username: string;
      uuid: string;
    }
    phone: string;
    cell: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    }
}