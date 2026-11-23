import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return <ErrorBoundary><Switch>
    <Route path="/" component={Home} />
    <Route path="/project/:slug" component={ProjectDetail} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch></ErrorBoundary>;
}
