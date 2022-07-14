import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task'


export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

      {/*todays tasks*/}

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          <ScrollView>
              {
                taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => handleDeleteTask(index)}>
                      <Task text={item}/>
                    </TouchableOpacity> 
                  )
                })
              }
          </ScrollView>
        </View>
      </View>

    {/*write tasks*/}

    <KeyboardAvoidingView style={styles.writeTask} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <TextInput style={styles.inputText} placeholder={'ketik disini!'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()} >
          <View style={styles.btnAddWrapper}>
            <Text style={styles.addTextBtn}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 12,
    height: '90%',
  },
  writeTask: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputText: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  btnAddWrapper: {
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  addTextBtn: {
    fontSize: 25,
  },
});
