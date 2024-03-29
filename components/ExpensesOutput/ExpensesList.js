import {FlatList} from 'react-native';
import ExpenseItem from './ExpenseItem';

function RenderExpenseItem({itemData}) {
  return (
    <ExpenseItem
      description={itemData.item.description}
      amount={itemData.item.amount}
      date={itemData.item.date}
      id={itemData.item.id}
    />
  );
}

function ExpensesList({expenses}) {
  return (
    <FlatList
      data={expenses}
      renderItem={itemData => <RenderExpenseItem itemData={itemData} />}
      keyExtractor={item => item.id}
    />
  );
}

export default ExpensesList;
