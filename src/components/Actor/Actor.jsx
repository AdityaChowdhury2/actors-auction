import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineUserDelete, AiOutlineUserAdd } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Actor = ({
	theme,
	actor,
	handleAddActor,
	handleRemoveActor,
	remaining,
}) => {
	const [isAdded, setIsAdded] = useState(false);
	const {
		name,
		age,
		role,
		image,
		salary,
		country,
		fbAcc,
		twitterAcc,
		short_intro,
	} = actor;
	return (
		<div className={`card shadow-xl ${theme === 'dark' && 'border-2'}`}>
			<figure className="px-10 pt-10 hover:animate-pulse">
				<img
					src={image}
					alt="Shoes"
					className={`w-28 bg-white rounded-full border-2 ${
						theme === 'dark' ? 'border-gray-200' : ' border-gray-700 '
					}`}
				/>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
				<p>{short_intro}</p>
				<div className="flex gap-5">
					<p className="font-bold">
						<small>Age: {age}</small>
					</p>
					<p className="font-bold">
						<small>Country: {country}</small>
					</p>
				</div>

				<p className="font-bold">
					<small>Role: {role}</small>
				</p>
				<p className="font-bold">
					<small>Salary: ${salary}</small>
				</p>
				<div className="flex gap-3">
					<button>
						<a href={`https://facebook.com/${fbAcc}`}>
							{' '}
							<BsFacebook />
						</a>
					</button>
					<button>
						<a href={`https://twitter.com/${twitterAcc}`}>
							<AiFillTwitterCircle />
						</a>
					</button>
				</div>
				<div className="card-actions">
					{!isAdded ? (
						<button
							disabled={remaining < actor.salary}
							onClick={() => {
								handleAddActor(actor);
								setIsAdded(!isAdded);
							}}
							className={`btn ${
								theme === 'dark' ? 'btn-primary' : 'btn-info'
							} capitalize mt-4`}
						>
							<AiOutlineUserAdd />
							Add This Actor
						</button>
					) : (
						<button
							onClick={() => {
								handleRemoveActor(actor.id, actor.salary);
								setIsAdded(!isAdded);
							}}
							className={`btn btn-error capitalize mt-4`}
						>
							<AiOutlineUserDelete />
							Remove Actor
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

Actor.propTypes = {
	theme: PropTypes.string.isRequired,
	actor: PropTypes.object.isRequired,
	handleAddActor: PropTypes.func.isRequired,
	handleRemoveActor: PropTypes.func.isRequired,
	remaining: PropTypes.number.isRequired,
};

export default Actor;
