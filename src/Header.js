import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
	const [{ basket, user }] = useStateValue();
	
	const handleAuthenticaton = () => {
	    if (user) {
	      auth.signOut();
	    }
	}

	return (
		<div className='header'>
			<Link to='/'>
				<img 
					className='header-logo' 
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
					alt='amazon logo'
				/>
			</Link>
			

			<div className='header-search'>
				<input
					className='header-searchInput'
					type='text' />
				<SearchIcon
					className='header-searchIcon' />
			</div>

			<div className='header-nav'>
				<Link to={!user && '/login'}>
					<div onClick={handleAuthenticaton} className='header-option'>
						<span className='header-optionLineOne'>
							Hello {!user ? 'Guest' : user.email}
						</span>
						<span className='header-optionLineTwo'>
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>

				<Link to='/orders'>
					<div className='header-option'>
						<span className='header-optionLineOne'>
							Returns
						</span>
						<span className='header-optionLineTwo'>
							& Orders
						</span>
					</div>
				</Link>

				<div className='header-option'>
					<span className='header-optionLineOne'>
						Your
					</span>
					<span className='header-optionLineTwo'>
						Prime
					</span>
				</div>
				
					<Link to='/checkout'>
						<div className='header-optionBasket'>
							<ShoppingBasketIcon />
							<span className='header-optionLineTwo header-basketCount'>
								{basket?.length}
							</span>
						</div>
					</Link>
			</div>
		</div>
	)
}

export default Header