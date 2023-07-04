import React, { useEffect, useMemo, useState } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const [sort, setSort] = useState([]);

  useMemo(()=>{
    console.log('list ascending')

    if(props.ascending){
      const sortedList = props.items.sort((a, b) => a - b);
      setSort(sortedList)
    }
  },[props.ascending])

  useMemo(()=>{
    console.log('list descending')

    if(props.descending){
      const sortedList = props.items.sort((a, b) => b - a);
      setSort(sortedList)
    }
  },[props.descending])


  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sort.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
