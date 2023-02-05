import './styles.scss'

// Composant Loader 
function Loader() {
  return (
    <div className='loader'>
      <div className="lds-ripple">
        <div></div><div></div>
      </div>
    </div>
  );
}

export default Loader;
