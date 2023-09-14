import PropTypes from 'prop-types';
import { FiUsers } from 'react-icons/fi';
import ActorInCart from '../ActorInCart/ActorInCart';

const ActorsCart = ({ cartActors, remaining, cost, theme }) => {
	return (
		<div
			className={`lg:flex-1 sticky top-2 ${
				theme === 'light' ? 'bg-white' : 'bg-base-100'
			} bg-opacity-90 rounded-xl lg:bg-opacity-0 py-2 lg:py0`}
		>
			<div className="lg:sticky lg:top-10">
				<div className="flex items-center gap-4 justify-center ">
					<div className="mt-1">
						<FiUsers />
					</div>
					<h2 className="font-bold text-2xl lg:text-xl xl:text-2xl">
						Actors Added: {cartActors.length}
					</h2>
				</div>
				<div className="text-center my-4 lg:my-10">
					<p>Remaining Amount: ${remaining}</p>
					<p>Cost: ${cost}</p>
				</div>
				<div className="space-y-4 px-3">
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
	theme: PropTypes.string.isRequired,
};

export default ActorsCart;
