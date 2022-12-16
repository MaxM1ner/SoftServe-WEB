import EventList from "./components/EventList";
import Header from "./components/Header";
import { ActivitiesProvider } from "./contexts/activities.context";
import "./styles.css";

export default function App() {
  const evList = [
    {
      name: "Movie 1",
      description: "The movie 1 description",
      category: "Movie"
    },
    {
      name: "Movie 2",
      description: "The movie 2 description",
      category: "Movie"
    },
    {
      name: "Test performance",
      description: "The performance description",
      category: "Performance"
    },
    {
      name: "Test concert",
      description: "The concert description",
      category: "Concert"
    }
  ];

  return (
    <div className="App">
      <ActivitiesProvider>
        <Header />
        <EventList events={evList} />
      </ActivitiesProvider>
    </div>
  );
}
