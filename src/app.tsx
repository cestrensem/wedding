import './app.css'
import { Countdown } from './containers/coundown'

const BARN_MAP_URL = 'https://yandex.com/map-widget/v1/?ll=20.467853%2C54.709127&mode=search&oid=70946816597&ol=biz&sctx=ZAAAAAgBEAAaKAoSCWiu00hLeTRAEXf1KjI6WktAEhIJUwd5PZgU1z8REHo2qz5Xwz8iBgABAgMEBSgKOABAh6ANSAFqBXdvcmxknQHNzMw9oAEAqAEAvQGiSNopwgEG1YSKpogCggIQS2FsaW5pbmdyYWQgYmFybooCAJICAjIymgIMZGVza3RvcC1tYXBz&sll=20.467853%2C54.709127&sspn=0.011348%2C0.004754&text=Kaliningrad%20barn&z=17.17'

const INVITATION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSewY3tZKTfM94QfDlWDGSpVma8wiHMed5oya-yu7ZTi-CP08Q/viewform?usp=header'

export const App = () => {
  return (
    <main className="scroll-container bg-dark-image">
      <section className="scroll-section bg-dark">
        <article className="hero">
          <h3 className="time text">29 августа 2026</h3>
          <h1 className="neon-text-black title">Андрей и Кристина</h1>
          <div className="hero-image"></div>
        </article>
        <article className="description">
          <h2 className="title">Мы счастливы пригласить тебя на нашу свадебную вечеринку!</h2>
          <p className="text">Этот вечер будет полон стиля, дерзости, свободы, безудержного веселья, танцев, искусства и конечно же, любви.<br/>Ждём тебя, чтобы зажечь вместе и сделать этот праздник ярким и незабываемым!</p>
          <div class="mouse"></div>
        </article>
      </section>
      <section className="scroll-section bg-dark">
        <article className="dresscode">
          <h2 className="title">Дресс код</h2>
          <section className="dresscode-list">
            <section className="dresscode-item">
              <header className="dresscode-item-header">
                <div className="dresscode-item-header-color dresscode-item-header-color-main"></div>
                <div className="dresscode-item-header-text">
                  <h3 className="title">Основной стиль</h3>
                  <p className="text">Серебристый металлик</p>
                </div>
              </header>
              <section className="dresscode-item-content-light"></section>
            </section>
            <section className="dresscode-item">
              <header className="dresscode-item-header">
                <div className="dresscode-item-header-color dresscode-item-header-color-alternative"></div>
                <div className="dresscode-item-header-text">
                  <h3 className="title">Альтернативный cтиль</h3>
                  <p className="text">Total black 🖤</p>
                </div>
              </header>
              <section className="dresscode-item-content-dark"></section>
            </section>
          </section>
        </article>
      </section>
      <section className="scroll-section bg-dark">
        <article className="location">
          <h2 className="title">Место проведения</h2>
          <p className="text">
            Barn. Каштановая аллея, 1А, Калининград.
          </p>
          <iframe
            src={BARN_MAP_URL}
            width="860"
            height="500"
            style={{ position: 'relative', border: 0 }}
            allowFullScreen
          />
        </article>
      </section>
      <section className="scroll-section bg-dark">
        <section className="last-layout">
          <article className="timer">
            <h2 className="title">До мероприятия</h2>
            <Countdown />
          </article>
          <article className="invitation">
            <p className="text">Ответь, пожалуйста, сможешь ли ты присутствовать</p>
            <a 
              href={INVITATION_URL}
              target="_blank"
              className="button"
            >
              Заполнить анкету
            </a>
          </article>
        </section>
      </section>
    </main>
  )
}
