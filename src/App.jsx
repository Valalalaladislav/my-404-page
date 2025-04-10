import './App.css'

function App() {
  return (
    <div className="error-container">
      <div className="error-content"> 
        <div className="text-wrapper"> 
    <h1 className="error-text">4<span className='italic-zero'>0</span>4</h1>
          <div className="decorative-form top-form">
          Oh, Dear
          </div> 
        </div>    

        <div className="image-wrapper">
          <img 
            src="/images/dog.webp" 
            alt="Страница не найдена"
            className="error-image"
          />
        </div>
        <div className="decorative-form left-form">
          looks like
        </div>
        <div className="decorative-form right-form">
          you are lost
        </div>
        
        <button className='capsule-button'>
        Return home
        </button>
    
      </div>
    </div>

  );  
}

export default App

