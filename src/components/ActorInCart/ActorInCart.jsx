import PropTypes from 'prop-types';

const ActorInCart = ({ actorInCart }) => {
	return (
		<div className="flex items-center gap-10 bg-base-100 py-5 pl-10 hover:scale-105 duration-500 ease-linear">
			<img src={actorInCart.image} alt="" className="w-10" />
			<h4>{actorInCart.name}</h4>
		</div>
	);
};

ActorInCart.propTypes = {
	actorInCart: PropTypes.object.isRequired,
};

export default ActorInCart;
