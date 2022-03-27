import './Channel.scss';

const Channel = ({ id, name}: { id: number, name?: string}) => {

  return (
    <div className="channel">
      <header>{name || 'Channel ' + id}</header>
    </div>
  )

}

export default Channel;