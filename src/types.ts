export type Message = {
  text: string;
  sender: "user" | "bot";
};

export type LayoutChild = {
  children: React.ReactNode;
};

export type QueryData = {
  name: string;
  title: string;
  type: string;
  description: string;
};
