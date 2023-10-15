import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle.jsx";

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main />
        </>
    );
}

export default App;
