import './style.css';
import { BusStops } from '../BusStops/index';

export const JournalDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((stops) => {
          return (
            <BusStops
              key={stops.code}
              name={stops.name}
              station={stops.station}
              time={stops.time}
            />
          );
        })}
      </div>
    </div>
  );
};
