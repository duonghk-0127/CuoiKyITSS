import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import UserList from './hook';
function App() {
  const user_list = ['Huyen','Hoa','Hung','Long'];
  var curent_user_list = user_list;
  const [name, deleteUser, showList, onChangeName] = UserList(list_user);
  return (
    <div className="App">
      <p>学生一覧:[{showList}]</p>
      <p>削除値を入力してください。</p>
      <input value={name} onChange={onChangeName}></input>
      <button onClick={deleteUser} >確定</button> <br/>
      <p>削除する名前： {name}</p> <br/>
      <p>新しい一覧：[{showList(curent_user_list)}]</p>
    </div>
  );
}

export default App;
