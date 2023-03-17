import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { LoremIpsum } from 'react-lorem-ipsum';


export function Post() {

  return (
    <>
      <header className="header-post" >

        <div className="infos-post">
          <img className="img-header-post" src="https://github.com/Varuska/Portfolio_Atualizado/blob/master/img/img.jpg?raw=true" alt="foto" />
          <p>Varuska</p>
        </div>

        <FiMoreHorizontal />
      </header>

      <div className="img-post">
        <img src="https://github.com/Varuska/Portfolio_Atualizado/blob/master/img/img.jpg?raw=true" alt="foto" />
      </div>

      <div className="footer-post">

        <IconContext.Provider value={{ size: "25px" }} >


          <section className="engagement-post">
            <div className="icons-1">
              <div className="icon"><IoMdHeartEmpty /> </div>
              <div className="icon"><BsChat /> </div>
              <div className="icon"><FiSend /> </div>
            </div>

            <div className="icon">< BsBookmark /> </div>

          </section>
        </IconContext.Provider>

        <section className="like">
          <span> 100 curtidas </span>
        </section>

        <div className="legend">
          <p>
            <strong>
              Maria Varuska
            </strong>
            <LoremIpsum />
          </p>
        </div>

        <div className="time-post">
          <time> A 1 Horas </time>
        </div>

        <div className="comment">

          <div className="fake-comment" >

            <IconContext.Provider value={{ size: '25px' }}>

              <div className="icon">
                <BsEmojiSmile />
              </div>
            </IconContext.Provider>
          </div>

          <button>
            Publicar
          </button>
        </div>
      </div>
    </>
  )

}