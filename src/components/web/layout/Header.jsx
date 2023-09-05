import { Back } from './Back';
import { ProfilePic } from './ProfilePic';
import './Header.scss';

export const Header = ({ back, handlePagesCount, img }) => {
	return (
		<div className="header">
			<Back handlePagesCount={back ? handlePagesCount : null} back={back} />
			{<ProfilePic img={img} />}
		</div>
	);
};
