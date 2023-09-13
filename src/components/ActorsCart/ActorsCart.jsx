import PropTypes from 'prop-types';
import { FiUsers } from 'react-icons/fi';
import ActorInCart from '../ActorInCart/ActorInCart';

const ActorsCart = ({ cartActors, remaining, cost }) => {
	return (
		<div className="flex-1 ">
			<div className="sticky top-10">
				<div className="flex items-center gap-4 justify-center ">
					<div className="mt-1">
						<FiUsers />
					</div>
					<h2 className="font-bold text-2xl">
						Actors Added: {cartActors.length}
					</h2>
				</div>
				<div className="text-center my-10">
					<p>Remaining Amount: ${remaining}</p>
					<p>Cost: ${cost}</p>
				</div>
				<div className="space-y-4">
					{cartActors.map(actorInCart => (
						<ActorInCart actorInCart={actorInCart} key={actorInCart.id} />
					))}
				</div>
			</div>
		</div>
	);
};

ActorsCart.propTypes = {
	cartActors: PropTypes.array.isRequired,
	remaining: PropTypes.number.isRequired,
	cost: PropTypes.number.isRequired,
};

export default ActorsCart;
