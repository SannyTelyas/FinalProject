import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <label>שם פרטי:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>שם משפחה:
        <input
          type="text" 
          value={lastname}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>ת.ז:
        <input
          type="text" 
          value={id}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
     
      <label>דואר אלקטרוני:
        <input
          type="text" 
          value={email}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      

      <label> שם ההורה:
        <input
          type="text" 
          value={parentname}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>טלפון :
        <input
          type="text" 
          value={phone}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>סיבת הפסקה :
        <input
          type="text" 
          value={reason}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

   
      <input type="submit" />


    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);