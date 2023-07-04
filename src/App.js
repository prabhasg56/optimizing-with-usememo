import React, { useState, useCallback } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('Ascending Order');
  const [showBtnAscend, setShowBtnAscend] = useState(true);
  const [showBtnDesc, setShowBtnDesc] = useState(false);

  const changeTitleDescending = useCallback(() => {
    setListTitle('Descending Order');
    setShowBtnAscend(false)
    setShowBtnDesc(true);
  }, []);

  const changeTitleAscending= useCallback(() => {
    setListTitle('Ascending Order');
    setShowBtnAscend(true)
    setShowBtnDesc(false);
  }, []);

  return (
    <div className='app'>
      <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} />
      {showBtnAscend && <Button onClick={changeTitleDescending}>Change to Descending Order</Button>}
      {showBtnDesc && <Button onClick={changeTitleAscending}>Change to Ascending Order</Button>}
    </div>
  );
}

export default App;
