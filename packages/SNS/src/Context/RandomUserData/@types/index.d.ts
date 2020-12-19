interface IUserProfile {
  name: string;
  photo: string;
}

interface IFeed extends IUserProfile {
  images: string[];
  description: string;
}
