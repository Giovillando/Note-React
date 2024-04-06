// ContactApp.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage";
import NotFoundPage from ".//NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import { LocaleProvider } from "../contexts/LocaleContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import ToggleTheme from "../components/ToggleTheme";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem("locale") || "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale =
              prevState.localeContext.locale === "id" ? "en" : "id";
            localStorage.setItem("locale", newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => ({
      authedUser: data,
    }));
  }

  onLogout() {
    this.setState(() => ({
      authedUser: null,
    }));

    putAccessToken("");
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <div className="contact-app">
            <header className="contact-app__header">
              <h1>Aplikasi Kontak</h1>
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      );
    }
    return (
      <LocaleProvider value={this.state.localeContext}>
        <ThemeProvider>
          <div className="contact-app">
            <header className="contact-app__header">
              <h1>
                {localeContext.locale === "id"
                  ? "Aplikasi Catatan"
                  : "Note App"}
              </h1>
              {authedUser && (
                <h3 className="archive">
                  <Link to="/archive">Go to Archive</Link>
                </h3>
              )}
              {authedUser && (
                <Navigation logout={this.onLogout} name={authedUser.name} />
              )}
            </header>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddPage />} />
                <Route path="/contacts/:id" element={<DetailPage />} />
                <Route path="/archive" element={<ArchivePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/login"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <div className="container">
              <ToggleTheme />
            </div>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default ContactApp;
