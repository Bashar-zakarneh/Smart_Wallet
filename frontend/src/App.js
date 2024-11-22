import AdminPage from "./components/AdminPage";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import SummaryPage from "./components/SummaryPage";

function App() {
  return (
    <div className="App bg-cover h-screen  bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <RegistrationForm />
      <LoginForm />
      <HomePage />
      <SummaryPage />
      <AdminPage />
    </div>
  );
}

export default App;
