import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
          <LoginForm/>
    </div>
  );
}

export default App;
/*
<div class="container is-fullhd">
        <div class="notification">
          <LoginForm/>
        </div>
      </div>
*/