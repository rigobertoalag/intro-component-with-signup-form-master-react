import TextInfo from './components/Textinfo'
import TrialBtn from './components/TrialBtn';
import Form from './components/Form'

function App() {
  return (
    <div className="cover">
      <TextInfo />

      <div className='right-content'>
        <TrialBtn />
        <Form />
      </div>
      {/* <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer> */}
    </div>
  );
}

export default App;
