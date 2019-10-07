import { connect } from 'dva';
import GameList from '../components/GameList';

const Games = ({ dispatch, games }) => {
  function handleDelete(id) {
    dispatch({
      type: 'games/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Games</h2>
      <GameList onDelete={handleDelete} games={games} />
    </div>
  );
};

export default connect(({ games }) => ({
  games,
}))(Games);
