import { useState } from 'react';
import Channel from '../Channel/Channel';
import './ArrangementView.scss';

const ArrangementView = () => {

  const [channels, ] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <section id="ArrangementView">
      {channels.map((element, index) => 
          <Channel id={index} />
      )}
    </section>
  )

}

export default ArrangementView;