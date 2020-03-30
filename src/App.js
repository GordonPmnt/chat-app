import React from 'react';
import Contact from './components/Contact';
import contacts from './data/contacts';

function App() {
  return (
    <div>
      {
        contacts.map(contact => <Contact {...contact} />)
      }
    </div>
  );
};

export default App;
