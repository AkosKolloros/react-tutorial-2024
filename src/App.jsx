import UserGreeting from "./UserGreetingModule/UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Akos"></UserGreeting>
    </>
  );
}

export default App;
