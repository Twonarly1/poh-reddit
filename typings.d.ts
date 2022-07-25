export type Comments = {
  created_at: string;
  id: number;
  post_id: number;
  text: string;
  username: string;
};

export type Vote = {
  created_at: string;
  id: number;
  post_id: number;
  upvote: boolean;
  username: string;
};

export type Subreddit = {
  created_at: string;
  id: number;
  topic: string;
};

export type Post = {
  body: string;
  created_at: string;
  id: number;
  image: string;
  subreddit_id: number;
  title: string;
  username: string;
  votes: Vote[];
  comments: Comments[];
  subreddit: Subreddit[];
};

export type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

export type Tab = {
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  path: string;
};
