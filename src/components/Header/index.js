import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { BsPlusSquare } from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';

import './style.css';

export function Header() {

    return (
        <header className="header">
            <div className="container">

                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <IconContext.Provider value={{ color: '#8e8e8e' }}></IconContext.Provider>

                <div className="input-fake">
                    <AiOutlineSearch />
                    <input placeholder="pesquisar" />

                </div>

                <div>

                    <div className="menu-icons">

                        <IconContext.Provider value={{ size: '26px' }}>
                            <div>
                                <AiFillHome />
                            </div>
                            <div>
                                <RiMessengerLine />
                            </div>
                            <div>
                                <BsPlusSquare />
                            </div>
                            <div>
                                <MdOutlineExplore />
                            </div>
                            <div>
                                <FiHeart />
                            </div>
                        </IconContext.Provider>
                        <img
                            className="img-user" src="	https://github.com/Varuska/Portfolio_Atualizado/blob/master/img/img.jpg?raw=true
                " />
                    </div>

                </div>
            </div>

        </header>
    )
}
