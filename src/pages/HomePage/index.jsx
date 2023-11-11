import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from 'react';
import { JournalDetail } from '../../components/JournalDetail';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? null : (
        <p>Nalezeno spojeni s id {journey.journeyId}</p>
      )}
      {journey === null ? null : <JournalDetail journey={journey} />}
    </main>
  );
};
