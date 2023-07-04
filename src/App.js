import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('Ascending Order');
  const [showBtnAscend, setShowBtnAscend] = useState(true);
  const [showBtnDesc, setShowBtnDesc] = useState(false);

  const changeTitleDescending = useCallback(() => {
    console.log('prabhas ascending')

    setListTitle('Descending Order');
    setShowBtnAscend(false)
    setShowBtnDesc(true);
  }, []);

  const changeTitleAscending= useCallback(() => {
    console.log('prabhas descending')

    setListTitle('Ascending Order');
    setShowBtnAscend(true)
    setShowBtnDesc(false);
  }, []);

  const listItems = useMemo(()=>[5, 3, 1, 10, 9],[]);

  return (
    <div className='app'>
      <DemoList title={listTitle} ascending = {showBtnAscend} descending = {showBtnDesc} items={listItems} />
      {showBtnAscend && <Button onClick={changeTitleDescending}>Change to Descending Order</Button>}
      {showBtnDesc && <Button onClick={changeTitleAscending}>Change to Ascending Order</Button>}
    </div>
  );
}

export default App;
