import {View, StyleSheet} from 'react-native';
import {useContext, useLayoutEffect} from 'react';
import IconButton from '../UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import Button from '../UI/Button';
import {ExpensesContext} from '../store/expenses-context';

function ManageExpense({route, navigation}) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx?.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx?.updateExpense(editedExpenseId, {
        description: 'Updated Book',
        amount: 55,
        date: new Date('2024-01-01'),
      });
    } else {
      expensesCtx?.addExpense({
        description: 'Book',
        amount: 55,
        date: new Date('2024-01-01'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      <View style={styles.deleteContainer}>
        {isEditing && (
          <IconButton
            icon="-"
            color={styles.trashColor}
            onPress={deleteExpenseHandler}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  trashColor: {
    color: GlobalStyles.colors.error500,
  },
});

export default ManageExpense;
