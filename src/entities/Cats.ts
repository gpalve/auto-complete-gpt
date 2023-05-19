interface Status {
  verified: boolean;
  sentCount: number;
}

export default interface Cats {
  id: string;
  user: string;
  text: string;
  status: Status;
}
