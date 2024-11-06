import Chat from "./components/chat/Chat";
import ChatList from "./components/list/chatList/chatList";
import Details from "./components/detail/Detail";

const App = () => {

  return (
    <div className='container'>
       <ChatList />
       <Chat />
       <Details />
    </div>
    
  )
}

export default App
