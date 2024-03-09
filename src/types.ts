export type Message = {
  text: string;
  sender: "user" | "bot";
};

export type LayoutChild = {
  children: React.ReactNode;
};
