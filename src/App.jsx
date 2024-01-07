import { useState } from "react";
import Cookies from "universal-cookie";
import Auth from "./components/Auth";
import SetRoom from "./components/SetRoom";
import Chat from "./components/Chat";

import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import SignOut from "./components/SignOut";

const cookies = new Cookies();

function App() {
  const [isAuth, setisAuth] = useState(cookies.get("auth-token"));
  const [room, setroom] = useState(null);

  const signout = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setisAuth(false);
    setroom(null);
  };
  if (!isAuth) {
    return (
      <main>
        <Auth setisAuth={setisAuth} />
      </main>
    );
  }

  return (
    <>
      <SignOut signout={signout} />
      {room ? (
        <div>
          <Chat room={room} />
        </div>
      ) : (
        <div>
          <SetRoom setroom={setroom} room={room} />
        </div>
      )}
    </>
  );
}

export default App;
