function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', handleClick);
  }
  
  function handleClick() {
    console.log('Button clicked');
  }