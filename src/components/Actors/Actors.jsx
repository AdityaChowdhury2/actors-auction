import PropTypes from 'prop-types';
import Actor from '../Actor/Actor';

const Actors = ({
	theme,
	actors,
	handleAddActor,
	handleRemoveActor,
	remaining,
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 gap-4">
			{actors.map(actor => (
				<Actor
					actor={actor}
					key={actor.id}
					theme={theme}
					handleAddActor={handleAddActor}
					remaining={remaining}
					handleRemoveActor={handleRemoveActor}
				/>
			))}
		</div>
	);
};

Actors.propTypes = {
	theme: PropTypes.string.isRequired,
	actors: PropTypes.array.isRequired,
	handleAddActor: PropTypes.func.isRequired,
	handleRemoveActor: PropTypes.func.isRequired,
	remaining: PropTypes.number.isRequired,
};

export default Actors;
