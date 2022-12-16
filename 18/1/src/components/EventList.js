import Event from "./Event";

export default function (props) {
  let movieList = [];
  let concertList = [];
  let perfomanceList = [];

  props.events.forEach((event) => {
    switch (event.category) {
      case "Movie":
        movieList.push(event);
        break;
      case "Performance":
        perfomanceList.push(event);
        break;
      case "Concert":
        concertList.push(event);
        break;
      default:
        break;
    }
  });

  return (
    <div className="eventList">
      <table>
        <tr className="mainRow">Movies</tr>
        <tr>
          {movieList.map((event, i) => (
            <Event
              key={i}
              name={event.name}
              description={event.description}
            ></Event>
          ))}
        </tr>
        <tr className="mainRow">Concerts</tr>
        <tr>
          {concertList.map((event, i) => (
            <Event
              key={i}
              name={event.name}
              description={event.description}
            ></Event>
          ))}
        </tr>
        <tr className="mainRow">Performances</tr>
        <tr>
          {perfomanceList.map((event, i) => (
            <Event
              key={i}
              name={event.name}
              description={event.description}
            ></Event>
          ))}
        </tr>
      </table>
    </div>
  );
}
