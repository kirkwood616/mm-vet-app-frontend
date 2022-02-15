interface MessageBoardPost {
  id?: string;
  dateTime: string;
  board: string;
  user: string;
  title: string;
  post: string;
  replies: MessageBoardPost[];
}

export default MessageBoardPost;
