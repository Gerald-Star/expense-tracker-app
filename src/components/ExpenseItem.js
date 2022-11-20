
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';



function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
};














//To add a JS to make the code dynamic start with const
//You dont have data hard coded in html.


// function ExpenseItem() {
//     const expenseDate = new Date(2021, 2, 28);
//     const expenseTitle = 'Car Insurance';
//     const expenseAmount = 200.28
//     return (
//         <div className='expense-item'>
//             <div> {expenseDate.to} </div>
//             <div className="expense-item_description">
//                 <h2>{ expenseTitle}</h2>
//                 <div className='expense-item_price'>${expenseAmount}</div>
//             </div>

//         </div>
//     )
// }

export default ExpenseItem;