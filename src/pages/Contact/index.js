import './index.css';

export default function () {
  const onSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = event.target.elements;
    console.log(name, email, message);
  };

  return (
    <>
      <h1>Contact</h1>

      <form onSubmit={onSubmit}>
        <div className='group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' required />
        </div>
        <div className='group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' id='email' required />
        </div>
        <div className='group'>
          <label htmlFor='message'>Message</label>
          <textarea rows={5} name='message' id='message' required></textarea>
        </div>
        <input type='Submit' defaultValue='Submit' />
      </form>
    </>
  );
}
