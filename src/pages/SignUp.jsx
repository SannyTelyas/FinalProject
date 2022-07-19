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
      <label>תאריך לידה:
      <Input type='date'
      placeholder='Enter BirthDate'
      value={values.birthdate} onChange={handleChange}
      name='birthdate'
      max={current}
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

      <label> :
        <input
          type="text" 
          value={email}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>אופן תשלום :
      <select value={paymentmethod} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>

      </label>

      <label> קבוצה :
      <select value={paymentmethod} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>

      </label>

      <div>
      •	לא יינתן החזר כספי בגין היעדרות משיעור מכל סיבה שהיא.
•	מבלי לגרוע מהאמור בסעיף 1 לעיל, בגין היעדרות משיעורים לתקופה של מעל שלושה שבועות מסיבה בריאותית יינתן החזר כספי בהתאם, בכפוף להצגת אישור רפואי.
•	קיום החוג מותנה במספר מינימום של נרשמים.
•	אימונים שיבוטלו עקב גשם יוחזרו בימים בהם אינה מתקיימת פעילות ו/או חופשות – בהודעה מראש.
•	אין החזרים כספיים עבור חופשות וחגים.
•	ניתן לשלם באמצעות המחאות/מזומן(לכל השנה)/הוראת קבע באשראי.
•	תשלום חודש ספטמבר בהמחאה/מזומן/פייבוקס – חצי חודש (117 ₪).
•	תשלום מראש עבור כל שנת הפעילות ב10 תשלומים חודשיים(אוקטובר-יולי כולל) שווים ל5 לכל חודש.
•	את הצ'קים יש לרשום לכבוד : תומר קוזק .
•	לצורך הוראת קבע יישלח טופס מילוי פרטי אשראי ואישור במייל.
•	בהרשמת אח שני או יותר תינתן הנחה בגובה 5% ממחיר החוג הזול יותר.
•	הודעת ביטול רישום ניתן למסור עד ליום ה25 לכל חודש באמצעות הודעה למספר 054-4660075 .
•	באחריות השולח לוודא הגעת הודעת הביטול.
•	לא ניתן לבטל רטרואקטיבית.
•	החזר כספי יינתן מה1 לחודש שלאחר הודעת הביטול.
•	משתתף רשאי להשתתף בחוג עד תום החודש בו נמסרה הודעת הביטול.
•	לא יתאפשר ביטול חוג לאחר התאריך 31.3.2022.
•	פעילות החוג עד סוף יולי.


      </div>

      <label> הצהרת בריאות :
        <div>בחתימתי על התקנון הריני מצהיר כי מצב בריאות בני/בתי תקין ומאפשר לו לבצע מאמצים גופניים במסגרת פעילות החוג. </div>
      <select value={paymentmethod} onChange={handleChange}>
        <option value="yes">yes</option>
        <option value="no">no</option>
        <label> במקרה שהתשובה היא לא אנא פרט:
            <input
          type="text" 
          value={no}
          onChange={(e) => setName(e.target.value)}
        /></label>
      </select>
      </label>

      <input type="submit" />



    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);