export type State = {
  content?: Content;
  token?: string;
};

export type Content = {
  [name: string]: string;
};

export type Link = {
  href: string;
  name: string;
};
