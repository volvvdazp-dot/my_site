import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App()  {
  const [count, setCount] = useState(0)

  return (
    <div style={styles.page}>
      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>

      <nav style={styles.nav}>
        <h2 style={styles.logo}>MySite.</h2>
        <div>
          <a href="#home" style={styles.link}>Главная</a>
          <a href="#about" style={styles.link}>Обо мне</a>
        </div>
      </nav>

      <main style={styles.main} id="home">
        <p style={styles.label}>МОЙ ПЕРВЫЙ ПРОЕКТ</p>

        <h1 style={styles.title}>
          Привет, я создаю <br />
          <span style={styles.gradient}>свой сайт</span>
        </h1>

        <p style={styles.text}>
          Это мой небольшой проект на React.
          Здесь я учусь программировать и создавать
          красивые сайты.
        </p>

        <div style={styles.buttons}>
          <a href="#about" style={styles.button}>
            Узнать больше →
          </a>

          <button
            onClick={() => alert('Спасибо за просмотр!')}
            style={styles.button2}
          >
            Нажми меня
          </button>
        </div>

        <div style={styles.cards} id="about">
          <div style={styles.card}>
            <div style={styles.icon}>💻</div>
            <h3>HTML и CSS</h3>
            <p>Изучаю основы создания сайтов.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>⚡</div>
            <h3>React</h3>
            <p>Пробую создавать приложения.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🚀</div>
            <h3>Мои цели</h3>
            <p>Стать лучше в программировании.</p>
          </div>
        </div>

        <div style={styles.counter}>
          <p>Ты посетил мой сайт? Нажми на кнопку!</p>
          <button
            style={styles.countButton}
            onClick={() => setCount(count + 1)}
          >
            Посещения: {count}
          </button>
        </div>
      </main>

      <footer style={styles.footer}>
        © 2026 MySite | Сделано мной ❤️
      </footer>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a, #1e1b4b, #312e81)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  circle1: {
    position: 'absolute',
    top: '100px',
    left: '-100px',
    width: '300px',
    height: '300px',
    background: '#6366f1',
    borderRadius: '50%',
    filter: 'blur(120px)',
    opacity: 0.4,
  },
  circle2: {
    position: 'absolute',
    top: '400px',
    right: '-100px',
    width: '300px',
    height: '300px',
    background: '#ec4899',
    borderRadius: '50%',
    filter: 'blur(120px)',
    opacity: 0.3,
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 8%',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    position: 'relative',
  },
  logo: {
    color: '#a5b4fc',
    fontSize: '28px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
  },
  main: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: '70px 20px',
    textAlign: 'center',
    position: 'relative',
  },
  label: {
    color: '#a5b4fc',
    letterSpacing: '4px',
    fontSize: '12px',
  },
  title: {
    fontSize: 'clamp(40px, 7vw, 70px)',
    lineHeight: 1.15,
    margin: '20px 0',
  },
  gradient: {
    background: 'linear-gradient(90deg, #818cf8, #f0abfc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  text: {
    color: '#cbd5e1',
    fontSize: '18px',
    lineHeight: 1.8,
    maxWidth: '550px',
    margin: 'auto',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '30px',
  },
  button: {
    background: '#6366f1',
    color: 'white',
    padding: '14px 22px',
    borderRadius: '10px',
    textDecoration: 'none',
  },
  button2: {
    background: 'rgba(255,255,255,0.08)',
    color: 'white',
    padding: '14px 22px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.2)',
    cursor: 'pointer',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '70px',
  },
  card: {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '18px',
    padding: '25px 20px',
    textAlign: 'left',
    backdropFilter: 'blur(10px)',
  },
  icon: {
    fontSize: '35px',
  },
  counter: {
    marginTop: '50px',
    padding: '20px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '15px',
  },
  countButton: {
    background: '#818cf8',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    padding: '25px',
    color: '#94a3b8',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    position: 'relative',
  },
}

export default App