import Pusher from 'pusher';
const pusher = new Pusher({
  appId: '1663774',
  key: '62d55acf1edfbb01b7aa',
  secret: '8cacf0ebbaf2c08064b8',
  cluster: 'us2',
  useTLS: true,
});
export default pusher;
