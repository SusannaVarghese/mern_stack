import { useState } from "react";


function App() {

  const [form, setForm] = useState({
    amount : 0,
    description : '',
    date : ''
  });

  function handleInput(e) {
    setForm({...form,[e.target.name]:e.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/transaction',{
      method: 'POST',
      body: form
    });
    console.log(res);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="number" value={form.amount} name="amount" placeholder="Transaction amount" onChange={handleInput} />
          <input type="text" value={form.description} name="description" placeholder="Transaction description" onChange={handleInput} />
          <input type="date" value={form.date} name="date" placeholder="Transaction date" onChange={handleInput} />
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
